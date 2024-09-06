
"use client";
import { CldImage } from 'next-cloudinary';

export const ContentWithWatermark = () => {
    return (
        <CldImage
            src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
            alt="Description of my image"
            width="500" // Transform the image: auto-crop to square aspect_ratio
            height="500"
            overlays={[{
                publicId: "samples/logo",
                position: {
                    x: 0,
                    y: 0,
                    gravity: 'center',
                },
                effects: [
                    {
                        crop: 'fill',
                        gravity: 'auto',
                        width: 200,
                        height: 200
                    }
                ]
            }]}
            crop={{
                type: 'auto',
                source: true
            }}
        />
    );
}


