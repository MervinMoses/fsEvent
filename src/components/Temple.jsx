import React,{useEffect} from 'react'
import { Headers } from './Headers';


export const Temple = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Headers title="We Provide"/>
	<br/>
	<br/>
	<section class="feature">
       
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="feature-box">
                <h1>Florists</h1>
                <p>
                  {" "}
                  Florists are professionals who specialize in providing floral
                  arrangements for events such as weddings. They are responsible
                  for creating beautiful and personalized flower arrangements
                  that help to enhance the ambiance and overall aesthetic of the
                  wedding. Florists meet with the couple to discuss their vision
                  for the wedding and to get an understanding of their taste
                  preferences, color scheme, and overall wedding theme. Florists
                  design and create a variety of floral arrangements, including
                  bouquets, boutonnieres, corsages, centerpieces, and other
                  decorative arrangements. Florists source high-quality flowers
                  from a variety of suppliers, ensuring that they are fresh and
                  in good condition for the wedding. Florists deliver the floral
                  arrangements to the wedding venue and set them up, ensuring
                  that they are displayed in a beautiful and aesthetically
                  pleasing manner. Florists ensure that the floral arrangements
                  are properly maintained throughout the wedding day, ensuring
                  that they stay fresh and vibrant.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 nopadding">
              <img src="/img/36.jpg" />
            </div>

            <div class="clearfix"></div>
            <br />
            <br />
            <div class="col-md-6 col-sm-6 nopadding">
              <img src="img/deco2.jpg" />
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="feature-box">
                <h1>Photography and videography</h1>
                <p>
                  {" "}
                  Photography and videography are essential components of a
                  wedding, as they capture the special moments and memories of
                  the day for the couple and their families to cherish for years
                  to come. The primary responsibility of a wedding photographer
                  and videographer is to capture all the significant moments of
                  the wedding ceremony and reception, including the ceremony
                  itself, the couple's first dance, speeches, and candid moments
                  of the guests. They work to tell a story of the couple's
                  special day through their photos and videos, capturing the
                  emotions, joy, and love shared by the couple and their loved
                  ones. After the wedding day, the photographer and videographer
                  are responsible for editing and enhancing the photos and
                  videos to ensure that they are of the highest quality and
                  accurately reflect the couple's unique style. The photographer
                  and videographer are responsible for delivering the final
                  products to the couple, whether it be through digital files,
                  albums, or other means as agreed upon in the contract.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="feature-box">
                <h1>Cultural programs </h1>
                <p>
                  {" "}
				  The organizers must plan the cultural programs well in advance and coordinate with the performers and other stakeholders to ensure that the programs are executed smoothly.The organizers must select performers who are skilled and experienced in the particular art form that is being presented. They may also consider the popularity of the performers and their suitability for the occasion.The performers must be given adequate time and space to rehearse their performances before the festival. The organizers may need to provide rehearsal spaces, equipment, and other resources. The organizers must ensure that the sound and lighting equipment is of good quality and that it is set up properly to enhance the performances. The organizers must arrange for a suitable stage and seating area for the audience. They must also ensure that the seating arrangements are safe and comfortable for the audience. The organizers must promote the cultural programs effectively through various media channels to attract a large audience.After the festival, the organizers should gather feedback from the performers and the audience to evaluate the success of the cultural programs. This feedback can be used to improve future festivals.
</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 nopadding">
              <img src="/img/culture.jpg" />
            </div>

            <div class="clearfix"></div>
            <br />
            <br />
            <div class="col-md-6 col-sm-6 nopadding">
              <img src="img/ritu.jpg" />
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="feature-box">
                <h1>Pooja Rituals
</h1>
                <p>
				The organizers of the festival must hire priests who are well-versed in the rituals and ceremonies that are to be performed during the festival. The priests should have a good understanding of the traditions and customs of the temple.The organizers must ensure that all the materials required for the Pooja are prepared in advance. These materials can include flowers, fruits, coconuts, incense, lamps, and other items.The priests must perform the Pooja according to the prescribed rituals and traditions. They must ensure that the Pooja is conducted with utmost devotion and sincerity.The priests must manage the crowd that gathers for the Pooja. They must ensure that the devotees follow the rules and regulations of the temple and that the Pooja is conducted peacefully.The priests may provide guidance to the devotees on how to perform the Pooja themselves. They may also answer any questions that the devotees may have about the Pooja or the temple.The priests must ensure that the sanctity of the temple is maintained during the festival. They must ensure that the temple premises are clean and that the devotees follow the rules and regulations of the temple.

                </p>
              </div>
            </div>

			
       
          </div>
        </div>

        <br />
        <br />
      </section>
</>
  )
}
