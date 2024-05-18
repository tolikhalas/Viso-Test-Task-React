import TranslateIcon from "@mui/icons-material/Translate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SwitchLang() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost flex gap-2">
        <TranslateIcon />
        <KeyboardArrowDownIcon className="rounded-xl bg-base-200" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-auto rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a>English</a>
        </li>
        <li>
          <a>Ukranian</a>
        </li>
      </ul>
    </div>
  );
}

export default SwitchLang;
