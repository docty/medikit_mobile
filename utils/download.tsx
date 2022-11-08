import { documentDirectory, DownloadProgressData, getInfoAsync, FileInfo, createDownloadResumable, StorageAccessFramework, writeAsStringAsync, readAsStringAsync, EncodingType, makeDirectoryAsync, FileSystemDownloadResult } from 'expo-file-system';
// import React from 'react';

// const hh: DownloadProgressData = {

// }


const ensureDirAsync = async (dir: string, intermediates = true): Promise<FileInfo> => {
    const props = await getInfoAsync(dir)
    if (props.exists && props.isDirectory) {
        return props;
    }

    await makeDirectoryAsync(dir, { intermediates })
    return await ensureDirAsync(dir, intermediates)


}

const downloadCallback = ({ totalBytesWritten, totalBytesExpectedToWrite }: DownloadProgressData) => {

    const progress = (totalBytesWritten / totalBytesExpectedToWrite) * 100;
    console.log(progress);
    
};


const saveAndroidFile = async (fileUri: string, fileName = 'File', mimeType = 'image/jpeg') => {
    try {
        const fileString = await readAsStringAsync(fileUri, { encoding: EncodingType.Base64 });

        const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (!permissions.granted) {
            return;
        }


        try {
            await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, mimeType!)
                .then(async (uri) => {
                    await writeAsStringAsync(uri, fileString, { encoding: EncodingType.Base64 });
                    alert('Downloaded Successfully')
                })
                .catch((e) => {
                });
        } catch (e: any) {
            throw new Error(e);
        }

    } catch (err) {
    }
}


/**
 * Download a file
 * @param uri  Image uri
 * @returns a promise
 */
export const downloadFile = async (uri: string) => {
    const fileName = 'afrik' + new Date().toString();

    await ensureDirAsync(documentDirectory!)


    const downloadResumable = createDownloadResumable(
        uri,
        documentDirectory + fileName,
        {},
        downloadCallback
    );

    try {
        const { uri, mimeType } = await downloadResumable.downloadAsync() as FileSystemDownloadResult;

        saveAndroidFile(uri, fileName, mimeType!)

    } catch (e) {
        console.error('download error:');
    }
     

    return true;
}


