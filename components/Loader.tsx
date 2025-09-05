
import React from 'react';

const imageLoadingMessages = [
    "กำลังเริ่มต้น AI สร้างสรรค์...",
    "กำลังวิเคราะห์รูปภาพอ้างอิง...",
    "กำลังประมวลผลด้วยวงจรศิลปะ...",
    "กำลังวาดภาพด้วยแสงดิจิทัล...",
    "กำลังเก็บรายละเอียดสุดท้าย...",
];

const videoLoadingMessages = [
    "กำลังเตรียมพร้อมสร้างวิดีโอ...",
    "กำลังวิเคราะห์เฟรมแรก...",
    "AI กำลังเรนเดอร์ภาพเคลื่อนไหว...",
    "ขั้นตอนนี้อาจใช้เวลานานหลายนาที...",
    "กำลังประกอบวิดีโอขั้นสุดท้าย...",
    "ขอบคุณที่อดทนรอ!"
];

interface LoaderProps {
    mode: 'image' | 'video';
}

const Loader: React.FC<LoaderProps> = ({ mode }) => {
    const messages = mode === 'video' 
        ? videoLoadingMessages 
        : imageLoadingMessages;
        
    const [message, setMessage] = React.useState(messages[0]);

    React.useEffect(() => {
        setMessage(messages[0]); // Reset message when mode changes
        const intervalId = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = messages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % messages.length;
                return messages[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, [mode, messages]);


    return (
        <div className="fixed inset-0 bg-base-100/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-t-brand-primary border-base-300 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-content transition-opacity duration-500">{message}</p>
        </div>
    );
};

export default Loader;