interface ListInfoProps {
    list: string[];
}

const ListInfo: React.FC<ListInfoProps> = ({ list }) => {
    return (
        <ul className="text-[14px]">
            {list && list.map((data, index) => (
                <li key={index} className="">
                    <p className="">{data} {index + 1 < list.length && " - "}</p>
                </li>
            ))}
        </ul>
    );
}

export default ListInfo;