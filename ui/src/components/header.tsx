import sfcLogo from "@/assets/sfc_logo_bg_wide.svg";

export const Header = () => {
  return (
    <div className="w-full flex items-center px-2 shadow bg-primary-foreground shadow-slate-300 !h-[72px]">
      <div className="inline-flex mx-auto">
        <img className="h-9 mask-squircle" src={sfcLogo} />
          <h1 className="pl-2 text-3xl font-sans">TMU-SFC</h1>
      </div>
    </div>
  )
}