
export const Skill = ({
    skill,
    icon
}) => {
    return (<>
       <div
  className="
    glass-card
    p-6
    rounded-xl
    w-full
    max-w-xs
    flex
    flex-col
    items-center
    gap-4
    text-center
    transition-all
    hover:bg-primary/10
    hover:shadow-[0_0_15px_rgba(13,204,242,0.4)]
    hover:scale-105
    overflow-hidden
  "
>
  <div className="w-16 h-16 rounded-lg bg-background-dark flex items-center justify-center text-primary shrink-0">
    {icon}
  </div>

  <span className="font-bold text-white tracking-widest text-xl mt-5 uppercase break-words">
    {skill}
  </span>
</div>

    </>);
}