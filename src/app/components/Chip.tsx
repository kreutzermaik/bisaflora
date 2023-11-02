type ChipProps = {
    name: string,
    color: string,
    onClick: () => void
}

export default function Chip(props: ChipProps) {

    return (
        <div onClick={props.onClick} className={`bg-${props.color}-500 p-2 rounded hover:bg-${props.color}-700 text-white font-bold cursor-pointer`}>
            {props.name}
        </div>
    )
}
