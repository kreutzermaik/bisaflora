import Image from "next/image";

type CardProps = {
    title: string,
    imagePath: any,
    water: number,
    season: string,
    sun: string
}

export default function Card(props: CardProps) {

    return (
        <div className="flex justify-between border-2 border-gray-600 p-4 rounded-lg mb-4 min-w-full">
            <div>
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    {props.title}
                </h2>
                <p className={`mb-1 max-w-[30ch] text-sm opacity-50`}>
                    {props.sun}
                </p>
                <p className={`mb-1 max-w-[30ch] text-sm opacity-50`}>
                    💧 Alle {props.water} Tage
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    🌱 {props.season}
                </p>
            </div>
            <div>
                <Image
                    src={props.imagePath}
                    alt={props.title}
                    className="rounded-lg"
                    width={150}
                    height={24}
                    priority
                />
            </div>
        </div>
    )
}
