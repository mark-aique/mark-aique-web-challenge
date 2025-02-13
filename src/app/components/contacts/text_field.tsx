
export type TextFieldParam = { label: string, hintText?: string, prefix?: string }
function TextField({ label, hintText, prefix }: TextFieldParam) {
    return <div className="border-b border-black">
        {label != null ? <p className="text-[12px]/[16px]">{label}</p> : null}
        <div className="flex flex-row items-end">
            {prefix != null ? <p className="text-black text-[16px]/[20px] pb-[4px] pt-[8px] px-[1px]">{prefix}</p> : null}
            <input
                className="bg-transparent border-none w-full text-black placeholder-black text-[16px]/[24px] pb-[4px] pt-[8px] px-[1px] leading-tight focus:outline-none"
                type="text"
                placeholder={hintText}>
            </input>
        </div>
    </div>;
}


export default TextField