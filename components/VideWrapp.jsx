"use client";

import { useState } from "react";
import Modal from "../components/Modal";
import VideDetailsCard from "../components/VideoDetailsCard";
import VideoYouMayLike from "../components/VideoYouMayLike";

export default function VideoClientWrapper({ video, lang }) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    if (!isModalOpen) {
        return null;
    }

    return (
        <Modal onClose={handleClose}>
            <div className="flex flex-col lg:flex-row gap-6">
                <VideDetailsCard video={video} lang={lang} />
                <VideoYouMayLike lang={lang} id={video.id} />
            </div>
        </Modal>
    );
}