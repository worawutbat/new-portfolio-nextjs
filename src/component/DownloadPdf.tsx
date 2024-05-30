'use client';

import axios from 'axios';
import { saveAs } from 'file-saver';
import React from 'react';

function DownloadPdf() {
  const downloadPdf = async () => {
    try {
      const response = await axios.get('/Worawut_Tititumjariya_CV.pdf', {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Worawut_Tititumjariya_CV.pdf');
    } catch (error) {
      console.error('Error downloading the PDF', error);
    }
  };

  return (
    <div className="group" title={'Download Worawut\'s CV'} key={'Download Worawut\'s CV'}>
      <button type="button" onClick={downloadPdf} className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">{'📑: Download Worawut\'s CV'}</p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default DownloadPdf;
