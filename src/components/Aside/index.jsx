import logo from "./logo.png";
import AsideLink from "../AsideLink";
import { IconFeed } from "../icons/IconFeed";
import { IconAccount } from "../icons/IconAccount";
import { IconInfo } from "../icons/IconInfo";
import { IconLogin } from "../icons/IconLogin";
import { Button } from "../Button";
import { Link } from "../Link";

import styles from "./aside.module.css";
import { useAuth } from "../../hooks/useAuth";

export const Aside = () => {
  const { isAuthenticated } = useAuth();

  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <img src={logo} alt="Logo da Code Connect" />
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Button href="#" outline>
                  Publicar
                </Button>
              </li>
              <li>
                <AsideLink href="/">
                  <IconFeed />
                  Feed
                </AsideLink>
              </li>
              <li>
                <AsideLink href="#">
                  <IconAccount />
                  Perfil
                </AsideLink>
              </li>
            </>
          )}
          <li>
            <AsideLink href="#">
              <IconInfo />
              Sobre nós
            </AsideLink>
          </li>
          <li>
            <AsideLink href={isAuthenticated ? "/auth/logout" : "/auth/login"}>
              <IconLogin />
              {isAuthenticated ? "Logout" : "Login"}
            </AsideLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
