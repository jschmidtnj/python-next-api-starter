import { axiosClient } from './axios';

export const download = async (url: string): Promise<void> => {
  const res = await axiosClient.get(url, {
    responseType: 'blob',
  });
  const filenameHeader = 'content-disposition';
  if (!(filenameHeader in res.headers)) {
    throw new Error('cannot find file name header');
  }
  const filename = res.headers[filenameHeader].split('filename=')[1].trim();
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(new Blob([res.data]));
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
};
