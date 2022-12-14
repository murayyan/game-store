import Profile from "../Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title={"Overview"}
            icon="ic-menu-overview"
            url="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title={"Transactions"}
            icon="ic-menu-transactions"
            url="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title={"Messages"} icon="ic-menu-messages" url="/member" />
          <MenuItem title={"Card"} icon="ic-menu-card" url="/member" />
          <MenuItem title={"Rewards"} icon="ic-menu-rewards" url="/member" />
          <MenuItem
            title={"Settings"}
            icon="ic-menu-settings"
            url="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title={"Log Out"} icon="ic-menu-logout" url="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
