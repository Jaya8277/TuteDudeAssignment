import React from 'react'
import InviteIcon from "../../images/people.svg";
import WalletIcon from "../../images/referral_tag.svg";
import CouponIcon from "../../images/rupee.svg";
import DiscountIcon from "../../images/discount_tag.svg";
import RupeeIcon from "../../images/wallet.svg";
const working = [
    {
      title: "Invite your Friends",
      text: "Share the link tutedude.com with your friends",
      icon: InviteIcon,
    },
    {
      title: "Friend purchases any course",
      text: "Using your REFERRAL CODE in the payments page",
      icon: WalletIcon,
    },
    {
      title: "You get ₹ 200 as referral money",
      text: "On total purchase the friend makes, into your wallet",
      icon: CouponIcon,
    },
    {
      title: "Your Friend gets ₹ 200 Off",
      text: "On his overall fee on successful purchase using your referral code",
      icon: DiscountIcon,
    },
    {
      title: "Transfer money from wallet",
      text: "When the wallet balance reaches ₹200 or more, you can withdraw it",
      icon: RupeeIcon,
    },
  ];

const Refferal = ({handleenroll}) => {
  return (
    <div> 
        <p className='lead'>UI/UX &gt; Refer & Earn </p>
    <section className='referral-section'>
        <div className='referral-details'>
            <div className='detail'>
                <p className='detail-text'>
                    Refferal Earning
                </p>
                <p className='numbers'>
                    &#8377; 2500
                </p>
            </div>
            <div className='detail'>
                <p className='detail-text'>
                    Total Referral
                </p>
                <p className='numbers'>
                    7
                </p>
            </div>
            <div className='detail'>
                <p className='detail-text'>
                    wallet Balance
                </p>
                <p className='numbers'>
                    &#8377; 500
                </p>
            </div>
            <div className='withdraw'>
                <button>
                    Withdraw Balance
                </button>
            </div>
        </div>
        <div className='referral-code'>
            <p>Your Referral Code </p>
            <button className='refer-btn'></button>
        </div>
        </section>                   
        <section className='referral-faq'>
            <h1>How does it work ?</h1>
           
            <div className='refqes'>
            {
                working.map((refqu, index) => {
                    return(
                        <div className='refquess' key={index}>
                        <div className='img-container'>
                            <img src={refqu.icon} alt="error" />
                        </div>
                        <div className='question-container'>
                            <h2 className='question'>{refqu.title}</h2>
                            <p className='answer'>{refqu.text}</p>
                        </div>
                    </div>
                    )
                })
            }
              
            </div>
        <div className='links'>
            <p onClick={handleenroll} className='friends-enrolled'>Friends Who Enrolled</p>
            <p className='terms'>Terms & Conditions</p>
        </div>
    </section>
    </div>
  )
}

export default Refferal