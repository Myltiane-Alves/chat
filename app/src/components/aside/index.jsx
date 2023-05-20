import './styles.css'
export default function Aside() {
    return (
        <aside>
            <header>
                <input type="text" placeholder="search" />
            </header>
            <ul>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span class="status orange"></span>
                                offline
                            </h3>
                        </div>
                </li>
              
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span class="status green"></span>
                                online
                            </h3>
                        </div>
                </li>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span class="status green"></span>
                                online
                            </h3>
                        </div>
                </li>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt=""/>
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span class="status green"></span>
                                online
                            </h3>
                        </div>
                </li>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg" alt=""/>
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span class="status orange"></span>
                                offline
                            </h3>
                        </div>
                </li>
            </ul>
        </aside>
    )
};