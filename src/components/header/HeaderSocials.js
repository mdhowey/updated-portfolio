import { AiOutlineLinkedin, AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dev-howey/" target="_blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/mdhowey" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://medium.com/@dev.howey" target="_blank">
        <AiFillMediumCircle />
      </a>
    </div>
  )
}

export default HeaderSocials;
