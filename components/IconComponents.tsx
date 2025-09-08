// Fix: Provide implementations for the required SVG icon components.
import React from 'react';

export const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

export const ReuseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992m0 0h-4.992m4.992 0-3.181-3.183a8.25 8.25 0 0 0-11.667 0l-3.181 3.183" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
  </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.195.025.39.05.585.077m-1.542 2.034a2.25 2.25 0 0 1-.585.077m1.058-2.111a2.25 2.25 0 0 0 2.134 4.34m2.134-4.34a2.25 2.25 0 0 1 .632 4.283m0-4.283a2.25 2.25 0 0 0-2.134-4.34m2.134 4.34c-.195-.025-.39-.05-.585-.077m1.542-2.034a2.25 2.25 0 0 0 .585-.077m-1.058 2.111a2.25 2.25 0 0 1-2.134 4.34m-2.134-4.34a2.25 2.25 0 0 0-.632-4.283" />
    </svg>
);

export const MagicWandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.364 3.636a1.5 1.5 0 0 0-2.122 0l-7.07 7.07a1.5 1.5 0 0 0 2.121 2.122L12 6.12l6.707 6.708a1.5 1.5 0 0 0 2.122-2.122l-7.07-7.07zM12 6.12V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5h-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 10.5H3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5l-1.06-1.06" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.56 4.5l-1.06-1.06" />
  </svg>
);

export const ZoomInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z M10.5 7.5v6m3-3h-6" />
    </svg>
);

export const ZoomOutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z M13.5 10.5h-6" />
    </svg>
);

export const ResetZoomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
    </svg>
);

export const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-7a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

// Helper component for rendering pixel art blocks
const PixelArt: React.FC<{ data: { r: number, c: number, s?: number, C: string }[] }> = ({ data }) => (
    <>
        {data.map((p, i) => (
            <div key={i} className={p.C} style={{ gridRow: p.r, gridColumn: `${p.c} / span ${p.s || 1}` }} />
        ))}
    </>
);

// Data for Zenitsu's 7th Form pixel art icon
const zenitsuIconArt = {
    dragon: [
        { r: 2, c: 15, s: 7, C: 'bg-yellow-300' }, { r: 3, c: 13, s: 10, C: 'bg-yellow-400' },
        { r: 4, c: 12, s: 12, C: 'bg-yellow-300' }, { r: 5, c: 14, s: 2, C: 'bg-red-500' },
        { r: 5, c: 16, s: 7, C: 'bg-yellow-400' }, { r: 6, c: 18, s: 5, C: 'bg-yellow-300' },
        { r: 6, c: 6, s: 8, C: 'bg-yellow-400' }, { r: 7, c: 4, s: 11, C: 'bg-yellow-300' },
        { r: 8, c: 3, s: 14, C: 'bg-yellow-400' }, { r: 9, c: 3, s: 15, C: 'bg-yellow-300' },
        { r: 10, c: 4, s: 16, C: 'bg-yellow-400' }, { r: 11, c: 7, s: 15, C: 'bg-yellow-300' },
        { r: 12, c: 10, s: 13, C: 'bg-yellow-400' }, { r: 13, c: 13, s: 10, C: 'bg-yellow-300' },
        { r: 14, c: 15, s: 8, C: 'bg-yellow-400' }, { r: 15, c: 17, s: 6, C: 'bg-yellow-300' },
    ],
    zenitsu: [
        { r: 13, c: 6, s: 4, C: 'bg-yellow-400' }, { r: 14, c: 5, s: 6, C: 'bg-orange-500' },
        { r: 15, c: 5, s: 6, C: 'bg-yellow-200' }, { r: 16, c: 6, s: 5, C: 'bg-gray-800' },
        { r: 17, c: 7, s: 6, C: 'bg-yellow-400' }, { r: 18, c: 7, s: 6, C: 'bg-yellow-400' },
        { r: 19, c: 8, s: 2, C: 'bg-gray-800' }, { r: 20, c: 9, s: 2, C: 'bg-gray-800' },
    ],
    sword: [
        { r: 16, c: 2, s: 10, C: 'bg-blue-300' }, { r: 17, c: 2, s: 3, C: 'bg-white' },
    ]
};

export const ZenitsuSeventhFormIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div {...props}>
      <div className="w-full h-full grid" style={{ gridTemplateColumns: 'repeat(24, 1fr)', gridTemplateRows: 'repeat(24, 1fr)' }}>
           <PixelArt data={zenitsuIconArt.dragon} />
           <PixelArt data={zenitsuIconArt.zenitsu} />
           <PixelArt data={zenitsuIconArt.sword} />
      </div>
    </div>
);