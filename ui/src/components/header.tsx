import sfcLogo from "@/assets/sfc_logo_bg_wide.svg";{/*SFCのロゴをインポート*/}
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
export const Header = () => {
  return (
    <div className="w-full flex items-center px-4 h-[70px]">
      <Link  to ="/" className="inline-flex items-center">
        <img className="h-9 mask-squircle" src={sfcLogo} />{/*画像挿入*/}
          <h1 className="pl-2 text-3xl font-sans">TMU-SFC</h1>
      </Link>
    <NavigationMenu className="ml-8 !flex-none">
      <NavigationMenuList className="justify-start"> {/* gapで要素間のスペースを確保 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>SFCとは</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link to= "annual">年間の活動</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link to= "about">活動概要</Link>
                </NavigationMenuLink>
             </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
             <NavigationMenuTrigger>出張実験</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link to="examples">実験例</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>      
    </div>
  )
}