'use client';

import Card from "@/app/components/Card";
import {Sun} from "@/app/types/SunEnum";
import {Season} from "@/app/types/SeasonEnum";
import {Plant} from "@/app/types/Plant";
import plantsData from "@/app/plants.json";
import {useEffect, useState} from "react";
import Chip from "@/app/components/Chip";

export default function Home() {

    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        setPlants(plantsData);
    }, []);

    /**
     * filter plants by room
     * @param room
     */
    function filterItems(room: string) {
        const filteredPlants = plantsData.filter((item) => {
            return item.category === room.toUpperCase();
        });
        setPlants(filteredPlants);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4 pt-8">
            <div className="flex flex-col items-center justify-between gap-2 lg:min-w-[1000px] min-w-full">
                <h1 className="lg:text-5xl text-3xl mb-6 font-semibold">👨‍🌾🌳 Unsere Pflanzen</h1>

                <div className="flex gap-2 mb-6 flex-wrap">
                    <Chip name="Alle" color="orange" onClick={() => setPlants(plantsData)} />
                    <Chip name="Wohnzimmer" color="blue" onClick={() => filterItems("Wohnzimmer")} />
                    <Chip name="Arbeitszimmer" color="fuchsia"  onClick={() => filterItems("Arbeitszimmer")} />
                    <Chip name="Küche" color="yellow"  onClick={() => filterItems("Küche")} />
                    <Chip name="Garten" color="green"  onClick={() => filterItems("Garten")} />
                    <Chip name="Vorgarten" color="cyan"  onClick={() => filterItems("Vorgarten")} />
                </div>

                {
                    (plants.length > 0) ?
                        plants.map(item => {
                            return (
                                <Card
                                    key={item.title}
                                    title={item.title}
                                    imagePath={item.imagePath}
                                    water={item.water}
                                    season={Season[item.season as keyof typeof Season]}
                                    sun={Sun[item.sun as keyof typeof Sun]}
                                />
                            )
                        })
                        : (<div onClick={() => setPlants((plantsData))} className="cursor-pointer">❌ Keine Pflanzen gefunden</div>)
                }
            </div>

            {/*
                TODO: 1) Alle Informationen aus der App für alle Pflanzen rausschreiben
                TODO: 2) Push Notifications hinzufügen (wenn reminder greift, benachrichtigen, mit den Pflanzen-Namen)
            */}
        </main>
    )
}
