// React Module Imports
import React from 'react';
// import { Link } from 'react-router-dom';

// Icons Imports
import Facebook from '../../../assets/icons/facebook.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import LinkedIn from '../../../assets/icons/linkedin.svg';
import Youtube from '../../../assets/icons/youtube.svg';

import './SocialIcons.css';


function SocialIcons() {

  // const [socialLinks, setSocialLinks] = useState([]);

  // const baseUrl = 'https://antopolis.antapp.space/api/infos';

  // useEffect(() => {
  //   fetch(`${baseUrl}social-link`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json()
  //       }
  //       else {
  //         throw new Error(res.status)
  //       }
  //     })
  //     .then(data => setSocialLinks(data))
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }, [])


  return (
    <>
      <div className="social_Icons_wrapper">
        {/* {socialLinks.status === true ? socialLinks.data.map((data, index) =>
          <Link to={data.link} key={index}>
            <img src={data.icon} alt={data.name} />
          </Link>

        ) :
          <p>no data found</p>
        } */}
        <a href="https://www.facebook.com/theantopolis" rel="noopener noreferrer" target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/antopolisbd/" rel="noopener noreferrer" target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/company/antopolis/" rel="noopener noreferrer" target="_blank">
          <img src={LinkedIn} alt="linkedin" />
        </a>
        <a href="https://www.youtube.com/channel/UChdtY8kknDeDweFqgy4wF9Q?view_as=subscriber" rel="noopener noreferrer" target="_blank">
          <img src={Youtube} alt="youtube" />
        </a>
      </div>
    </>
  )
}

export default SocialIcons