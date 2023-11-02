type ChipProps = {
    name: string,
    onClick: () => void
}

export default function Chip(props: ChipProps) {

    return (
        <div onClick={props.onClick} className={`bg-blue-500 p-2 rounded hover:bg-blue-700 text-white font-bold cursor-pointer`}>
            {props.name}
        </div>
    )
}
