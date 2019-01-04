import React from "react";
import Profile from "../Profile/Profile";
import VideoChat from "../VideoChat/VideoChat";
import ProfileListsContainer from "../ProfileLists/ProfileListsContainer";

const Dashboard = props => {
  return (
    <div>
      <Profile _id={props._id} profiles={props.profiles} />
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="QP9XEXR4X7PZN" />
        <table>
          <tr>
            <td>
              <input
                type="hidden"
                name="on0"
                value="Suite 16 Financial Packages"
              />
              Suite 16 Financial Packages
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="1 X 1 on 1 Consultation">
                  1 X 1 on 1 Consultation $125.99 USD
                </option>
                <option value="2 X 1 on 1 Consultation">
                  2 X 1 on 1 Consultation $210.99 USD
                </option>
                <option value="4 X 1 on 1 Consultation">
                  4 X 1 on 1 Consultation $329.99 USD
                </option>
              </select>{" "}
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        {/* <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        /> */}
      </form>
      <ProfileListsContainer
        _id={props._id}
        profiles={props.profiles}
        handleChange={props.handleChange}
        searchableProfiles={props.searchableProfiles}
        updateSearchableProfiles={props.updateSearchableProfiles}
        hasSetRole={props.hasSetRole}
        stars={props.stars}
      />
      <VideoChat />
    </div>
  );
};

export default Dashboard;
