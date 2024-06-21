import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = (props) => {
   const path = props.router.location.pathname;

   const menuContent = [
      { name: "Экраны", link: "/" },
      { name: "Помощь", link: "/help" },
   ];

   const menuItems = menuContent.map((item) => (
      <li className={s.header__item} key={item.name}>
         <Link
            className={s.header__link + (item.link === path ? " " + s.header__linkActive : "")}
            to={item.link}
         >
            {item.name}
         </Link>
      </li>
   ));

   return (
      <header className={s.header}>
         <div className={s.header__container}>
            <Link className={s.header__logo} to="/">
               <svg
                  width="85"
                  height="14"
                  viewBox="0 0 85 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M8.64 4H10.206V13H8.64V11.452C7.86 12.64 6.726 13.234 5.238 13.234C3.978 13.234 2.904 12.778 2.016 11.866C1.128 10.942 0.684 9.82 0.684 8.5C0.684 7.18 1.128 6.064 2.016 5.152C2.904 4.228 3.978 3.766 5.238 3.766C6.726 3.766 7.86 4.36 8.64 5.548V4ZM5.436 11.722C6.348 11.722 7.11 11.416 7.722 10.804C8.334 10.18 8.64 9.412 8.64 8.5C8.64 7.588 8.334 6.826 7.722 6.214C7.11 5.59 6.348 5.278 5.436 5.278C4.536 5.278 3.78 5.59 3.168 6.214C2.556 6.826 2.25 7.588 2.25 8.5C2.25 9.412 2.556 10.18 3.168 10.804C3.78 11.416 4.536 11.722 5.436 11.722ZM13.3706 2.362C13.0706 2.362 12.8186 2.26 12.6146 2.056C12.4106 1.852 12.3086 1.606 12.3086 1.318C12.3086 1.03 12.4106 0.783999 12.6146 0.579999C12.8186 0.364 13.0706 0.256 13.3706 0.256C13.6586 0.256 13.9046 0.364 14.1086 0.579999C14.3126 0.783999 14.4146 1.03 14.4146 1.318C14.4146 1.606 14.3126 1.852 14.1086 2.056C13.9046 2.26 13.6586 2.362 13.3706 2.362ZM12.5786 13V4H14.1446V13H12.5786ZM18.0997 5.512C18.6157 4.396 19.5517 3.838 20.9077 3.838V5.476C20.1397 5.44 19.4797 5.644 18.9277 6.088C18.3757 6.532 18.0997 7.246 18.0997 8.23V13H16.5337V4H18.0997V5.512ZM32.16 3.766C33.168 3.766 33.984 4.096 34.608 4.756C35.232 5.404 35.544 6.286 35.544 7.402V13H33.978V7.456C33.978 6.76 33.798 6.22 33.438 5.836C33.078 5.452 32.598 5.26 31.998 5.26C31.326 5.26 30.786 5.488 30.378 5.944C29.982 6.388 29.784 7.072 29.784 7.996V13H28.218V7.456C28.218 6.76 28.044 6.22 27.696 5.836C27.36 5.452 26.898 5.26 26.31 5.26C25.65 5.26 25.098 5.488 24.654 5.944C24.222 6.4 24.006 7.084 24.006 7.996V13H22.44V4H24.006V5.206C24.618 4.246 25.512 3.766 26.688 3.766C27.9 3.766 28.782 4.276 29.334 5.296C29.958 4.276 30.9 3.766 32.16 3.766ZM45.3113 11.866C44.3873 12.778 43.2653 13.234 41.9453 13.234C40.6253 13.234 39.5033 12.778 38.5793 11.866C37.6673 10.954 37.2113 9.832 37.2113 8.5C37.2113 7.168 37.6673 6.046 38.5793 5.134C39.5033 4.222 40.6253 3.766 41.9453 3.766C43.2653 3.766 44.3873 4.222 45.3113 5.134C46.2353 6.046 46.6973 7.168 46.6973 8.5C46.6973 9.832 46.2353 10.954 45.3113 11.866ZM41.9453 11.704C42.8453 11.704 43.6013 11.398 44.2133 10.786C44.8253 10.174 45.1313 9.412 45.1313 8.5C45.1313 7.588 44.8253 6.826 44.2133 6.214C43.6013 5.602 42.8453 5.296 41.9453 5.296C41.0573 5.296 40.3073 5.602 39.6953 6.214C39.0833 6.826 38.7773 7.588 38.7773 8.5C38.7773 9.412 39.0833 10.174 39.6953 10.786C40.3073 11.398 41.0573 11.704 41.9453 11.704ZM53.0255 3.766C54.0815 3.766 54.9275 4.102 55.5635 4.774C56.1995 5.434 56.5175 6.334 56.5175 7.474V13H54.9515V7.564C54.9515 6.832 54.7535 6.268 54.3575 5.872C53.9615 5.464 53.4155 5.26 52.7195 5.26C51.9395 5.26 51.3095 5.506 50.8295 5.998C50.3495 6.478 50.1095 7.222 50.1095 8.23V13H48.5435V4H50.1095V5.296C50.7455 4.276 51.7175 3.766 53.0255 3.766ZM59.4956 2.362C59.1956 2.362 58.9436 2.26 58.7396 2.056C58.5356 1.852 58.4336 1.606 58.4336 1.318C58.4336 1.03 58.5356 0.783999 58.7396 0.579999C58.9436 0.364 59.1956 0.256 59.4956 0.256C59.7836 0.256 60.0296 0.364 60.2336 0.579999C60.4376 0.783999 60.5396 1.03 60.5396 1.318C60.5396 1.606 60.4376 1.852 60.2336 2.056C60.0296 2.26 59.7836 2.362 59.4956 2.362ZM58.7036 13V4H60.2696V13H58.7036ZM67.5547 5.512H65.1607V10.39C65.1607 10.834 65.2447 11.152 65.4127 11.344C65.5927 11.524 65.8627 11.62 66.2227 11.632C66.5827 11.632 67.0267 11.62 67.5547 11.596V13C66.1867 13.18 65.1847 13.072 64.5487 12.676C63.9127 12.268 63.5947 11.506 63.5947 10.39V5.512H61.8127V4H63.5947V1.948L65.1607 1.48V4H67.5547V5.512ZM76.5477 11.866C75.6237 12.778 74.5017 13.234 73.1817 13.234C71.8617 13.234 70.7397 12.778 69.8157 11.866C68.9037 10.954 68.4477 9.832 68.4477 8.5C68.4477 7.168 68.9037 6.046 69.8157 5.134C70.7397 4.222 71.8617 3.766 73.1817 3.766C74.5017 3.766 75.6237 4.222 76.5477 5.134C77.4717 6.046 77.9337 7.168 77.9337 8.5C77.9337 9.832 77.4717 10.954 76.5477 11.866ZM73.1817 11.704C74.0817 11.704 74.8377 11.398 75.4497 10.786C76.0617 10.174 76.3677 9.412 76.3677 8.5C76.3677 7.588 76.0617 6.826 75.4497 6.214C74.8377 5.602 74.0817 5.296 73.1817 5.296C72.2937 5.296 71.5437 5.602 70.9317 6.214C70.3197 6.826 70.0137 7.588 70.0137 8.5C70.0137 9.412 70.3197 10.174 70.9317 10.786C71.5437 11.398 72.2937 11.704 73.1817 11.704ZM81.3458 5.512C81.8618 4.396 82.7978 3.838 84.1538 3.838V5.476C83.3858 5.44 82.7258 5.644 82.1738 6.088C81.6218 6.532 81.3458 7.246 81.3458 8.23V13H79.7798V4H81.3458V5.512Z"
                     fill="#fff"
                  />
               </svg>
            </Link>

            <nav className={s.header__nav}>
               <ul className={s.header__list}>{menuItems}</ul>
            </nav>

            <div></div>
         </div>
      </header>
   );
};
