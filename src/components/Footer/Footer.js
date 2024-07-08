import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-part">
        <div className="row offset-1">
          <div className="col-sm-3">
            <h6 className="fw-bold">
              <img
                src="/logo.png"
                alt="logo"
                className="logo"
              />
            </h6>
          </div>
          <div className="col-sm-3">
            <h6>LANGUAGE</h6>
            <div className="d-flex flags gap-1">
              <img
                src="data:image/png;base64,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"
                alt="language"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAKTElEQVR4Ad1be3CcVRX/7Tub3c07oWlFgi1J2oAIguOArcj0ITg8WkcRnD5spTjTURAZRv9whkGdgRZKKVKHqRQqTuN0HHAUdcYwonQc/yiISFOTlKYpfeT93E2Tzb78nS/7bb59ZPPtt9+miWdm893v3nvOPefcc88993w3FhQYPsLymjDsayyINUVhbeSznkOW81fGnzc+fIDPEf6G2d7OZxv7tjoQOrYCp/vifQrysBSCajvqb6YA91OYdaTfxJ/RcWLEbY3B8hfSam5E+7tm82uUsTQ+TmFFCWd6JxndzsaVaR1MqKAiTpLMKxzjJSrDbwJJwzOTGLsVTRVWRB4mU99lpZj2fMAwlbE/BMfzn8aHw/kMaNgCaJuWDtRvJiPPkIHqfJjIA3eIuE82oP0FChI1QseQAjjrK2wIH+aAtxgZtAA4/7AhsvUafHQ6V9rWXBHo4DZS+OPEWyjCiwi3RmB7n7x9I1d5dCuAJm9tQ8NzNPnXOYhsYQsNfOSt+b9ofFZ41cucriVAk3faEXqVA9yvl/Bl7nckAO+2m/BeaC4+5lSACE+Tf4OE7pyL2EJq52T9cRyejXMpIaupiKfnFndwsQkvE8Ft+Ss++A/PtRyyKqAdDXtJaMtCmtlceJElSxmezoYz6xKgw/saEY9mQ14sbVTEAyvR1pyJ34wKYFi7nNvKe0QozYS0COtGrYjdWI+OzlTe05aArHsK/6vLKbzzarssYjOhNAoLd7F0qmkKYHi7gyPPW5BjdVtgK51hw1ZmRe2zlQC5NRlWt6ExzZ8l6VkONtzy5DxeZfLgWcktO1CFiD+G0aMBVH2/FI4lNnSu7c6KY7Cxz4Vgw9XoktyDAjOq5yuFf4SPeRVeuOh7agQld7jxyeYaFH/OhViEoZw3iTXpZgbUTMH5PS2hhAXIeZ5rv4uN83Wk1fKBpfsq4buzOFEXvRTD2B8uYaQ5gODJqUS9CQU5Qdap+YSEmiWZwQZDwturEmQM8efb4Ibvy+4EbrgngpHfBDD+9gRC58OJepMKFYxtHlRpJThn5Va1MtdnzRMVuaIk+rsanSj7phdDLwfQ9yRzG3R+/pYJ9HNZBP46geiYoWN+gn6mAtN14ugV4H4DSA6P4147XZXbX2edHb71briusSN4KvfZCnaEcG5Lf2JQ10onoiN0AgUETvYqLvkbmD94X7EASWAaHU/MV8C7wWOMRDR5v+vfPYLg6XRFWooS7srYOClY9HcPSJWiACui61Padb96N0w7LlURuhFn6RgZjcL/50tprSV3eeBZUzRTb7XAVe+Yec+9tFZQrJK3Z6y8Knd8wLHMjqImp4LqanBAieCMEErFSTYKpTV0LoRlv6iCd60bxbcUoe71Gjg+oazgVGy979dz6VdZ5aMFMQzZlzLrGkzv+pltTC8XevsF20OwOCxY9mIVrnyVOViOG+AukQdYuPTXWDn7hpyfDKyav8qEWctApac+xTHWPh3faeIKD7w9mXe4TGfYJD6gQR0ol6e92gr39clrsOhaZ75mmcaCmPySn5TDfaMrqa3yIR9K7jXoeGcoNVh47pfPTZ+dqWOJWi7f4kP146WK2SW15fMSiWHwwBgGDvCjDsu5Qs2Py1G+2YvhV/yITsbguNKO4cMBTH4QzJWU2v+4eJH02J+8DR/2Y+JfQdTurYTzqrycjTJYuDuMiz8YwsS7hplFsG0KU11h9O0eNaRAVWrNU4lhfZqKpOLkh1M4u7EXY79P35aSOs7xEnhrAl139+YlvAwR7Ahj8MUxs4QXkj5ZAjIl03uZVM0Cst6ueKIc1mKN25+lr1odC8bQ/8yoYk1qXT5Pi4tuS2IkA8tnlnGDuhUgBGSfX/pcJVyr5tQXpk6HcPGRQcj2tYAhKLuAXE7QBVNnwji3Y0DX9nN+R39BhNdmj3Qxnb2TXxSQ03d2z2qGozpWgdIv++CGWiu+UwJbpc0QbgYkRQGcUv0gJz89kBok6cHR00fiAt86zZlAD9LsfQbsdCsdjAaT44BZEMQBer6QMjgdkr9lEt51blg0E1P8+SIl2SmHm3xAAi77FXbGIzx7XMXzBrfkkk1eTH08fWSWpOr43yaUNJqBcdplg2/Xi+j5EoXUHEu1e3vRdQxXNTGDhZS9txdh9I38ttDIWAwVD3mUAEhdeu7POJXzQOhiBN2PDhgVXsRut/JAcEKvAnzxo6/0D7RcStrbM8UMZiwD2Ur7fjqM8zspKMsqSEDVdXcPgzXj+UJaf6tVrqKR6AxldYSUp5ia54tFChN9PxvBhV2DSDXvaCCK7scG0f34ECSpKcvFrOyuRIEWJ72vmkCRYn7pMlmbx6zxe3itKfKmvUoyInwhjLNf7Z0zsBn73TgjyB4lRea9LcVnpFHOUGFL32a8a4shJn/2vn5FwZJLdCzVOJ0MZLJV0e990ICOASUjxJeWbJ2lTWa7i2Gx5PD0gMQMH9/Xi/Bgbk5QvgyVfT39lBebiqHrrh7l4KMoeFNPXidPmv9bIoeiaobDN7F8XI9gZvexlTMhR1OWjyECtXsqFKVJVriQwFFvqMepfyvHPLmBSSWIMzScHDHKrIUbcd2bSyAWIye9kns8yicyo/T04NHiT4rw0jexiHah2kNzMJwc1TNwpj7iLCdPhFD9aCmKb55Oekiuz7ncoRy8IkMRxaFmwjVax0/lT/0cg/8UfMUHSIFr4iU+8rp1KXSMgCQ0lBRXHFnifc9qfmugo7OWJObICOlMOEO0ALn2o0BCAfKtjA0vqA3z+ZR0lza8lW+BnWsuQL4RyKnSZNinfhcUugkFyAvv3u7jo1/K8wWS6a3cVYKhX/rReXs3xv/OTC+3QdUpmskHqfYy7tmvpZm24dIZbmeHl7WdClkWBcTCjMPioZiY/9L9lTi31fx54EhbuPe/ppUnTQHkw8KbVcfY6VZtx/ksS4AjQY+ZwOX9TiPabqPASVFv0hKQAaWDXDxmkZnHywNmC08pRmyIfitVeJEuTQFSGb91/W0p/z8AZ39HphtiIltGBUgDPeVvibhXyoscdvOOoFzwzghpPkDbS/wBb40doiK2aesXUfkI/5liM4Wc9UAyqwWIkLJm/PDtZPFPi0hohVV6/Dflxng24aVjVgVIB7lt3Y3ae1g8JO+LBH7Nids0101xkSXrEtAKG98ed7PuMW39AivLFreHZv9DsV49vOlWgEqMlwrupU8QazB0o0ylU4Anv5nhQTrvo7nQzlkBQpyO8VNy95bF1fJ+uYET8g7X/DYKfyZXXgwpQAaRJRH/t7k9fK3JdWCT+svJ7keM8A7qNfnUcQ0rQCV0BnVlcv2UjDzMuvg1DrW1YM9BUn5eDjbL0ZlXxJq3AlQRedHay3+ski1zO5XRpNab/DxBUz8UhuNgE1oDZtA2TQFaZuQSYvwe3jrWX8ffnNutFl9TlgDmP/y1MId3RE1jadrzLhZEAVqu5Cqa3MbizMlVvJX81fMnS6WMPy9/AjKbkgWVi8zypaqN/SVVf0xS13wWDP4Ha/kn5ZD5FU0AAAAASUVORK5CYII="
                alt="language"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <h6>FOLLOW US</h6>
            <div className="d-flex flags gap-3 text-center">
              <a href="https://telegram.com/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  color="#0088CC"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(0, 136, 204)' }}
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>
              </a>
              <a href="https://x.com/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="twitter"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
              <a href="https://facebook.com/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  color="#1877F2"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(24, 119, 242)' }}
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-sm-3">
            <h6>INTERFACE</h6>
            <ul className="p-0">
              <li className="mode-switcher">
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F95192"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun-dim sun"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 4h.01"></path>
                    <path d="M20 12h.01"></path>
                    <path d="M12 20h.01"></path>
                    <path d="M4 12h.01"></path>
                    <path d="M17.657 6.343h.01"></path>
                    <path d="M17.657 17.657h.01"></path>
                    <path d="M6.343 17.657h.01"></path>
                    <path d="M6.343 6.343h.01"></path>
                  </svg>
                  Light Mode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <p className="text-center">© 2024 by <a href="https://otvconsulting.com">On The Verge</a></p>
      </div>
    </div>
  );
};

export default Footer;
