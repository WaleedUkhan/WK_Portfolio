import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial  link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/WaleedUkhan" Icon={FiGithub} />
      <SingleContactSocial link="https://web.facebook.com/profile.php?id=100061250766952" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;
