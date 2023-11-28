import React from "react";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { BiCross, BiPlus, BiX } from "react-icons/bi";
import Footer from "../../components/Footer/Footer";

const FooterPages = () => {
  const [pageType, setPageType] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setPageType(location?.state?.type);
    }
  }, [location]);

  const [target, setTarget] = useState(null);
  const toggleTarget = (id) => {
    setTarget(id);
  };

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <Header2 />
        <div className="w-full min-h-[200px] flex justify-center z-1">
          <div className=" sm:w-[950px] mt-5 shadow-xl border border-[#1a1a1d26] sm:pl-24 pl-3 pr-3 sm:pr-24 pt-10 pb-10 mb-10">
            {pageType === "return&refund" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase sm:text-xl text-sm font-semibold">
                  Returns & Refund
                </h1>
                <br />
                Please read our Returns & Refund Policy here. <br />
                <br />
                <span className="font-semibold">
                  I have received a damaged product, what should I do?
                </span>{" "}
                <br />
                <br />
                – You received a damaged item. We will require you to send proof
                of damage (an unboxing video) within 5 days from the date of
                delivery after that no requests will be entertained.
                <br />{" "}
                <span className="font-semibold">
                  Just mail us at :support@harshhasthkala.com
                </span>{" "}
                <br />
                <br />
                <span className="font-semibold">
                  How do I cancel an order?
                </span>{" "}
                <br />
                <br />
                Before 24 hours, Our staff will manually review all orders on
                that day. The order review will be completed within 24 hours. It
                includes checking all customers’ info, shipping address,
                spelling errors, missing street numbers or other details, etc.
                Within this period, cancellation is still possible. <br />
                <br />
                After the order review, all orders of that day will be
                fulfilled. It includes packaging, sorting, and dispatching. In
                this stage, NO CANCELLATION is accepted. <br />
                <br />
                <span className="font-semibold">
                  What is your return policy?
                </span>{" "}
                <br />
                <br />
                You received an incorrect item, size, style, etc. In this
                situation, we will require you to send a photo and video within
                5 days from the date of delivery. You may also opt for a resend
                only if the request is accepted. Resends will take 5-9 business
                days, just like placing a new order. <br />
                <br />
                BULK ORDER FORM <br />
                Take reference from www.indigifts website for the form
              </p>
            )}
            {pageType === "faqs" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  FAQ'S
                </h1>
                Frequently Asked Questions <br />
                <br />
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      01
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-0">
                        What products does Harsh Hathkala sell?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 1 ? "block" : "hidden"
                        } z-1`}
                      >
                        Harsh Hasthkala brand is known for its beautiful and
                        affordable gifts. In this industry of gifts we are very
                        different with our practice which includes “Perfect Gift
                        with Perfect Craft” .We have created this brand with all
                        the love we have for gifts and with a vision to spread
                        love with our special gift hampers to your special ones.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(1) : toggleTarget(null);
                    }}
                  >
                    {target == 1 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      02
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-0">
                        Why should I shop from Harsh HasthKala?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 2 ? "block" : "hidden"
                        } z-1`}
                      >
                        With affordable pricing, attractive offers, and 100%
                        genuine products, we will leave you pleasantly
                        surprised. Each product is unique and will make you go
                        ‘wow’!
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(2) : toggleTarget(null);
                    }}
                  >
                    {target == 2 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      03
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How will I know that my order is confirmed?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 3 ? "block" : "hidden"
                        } z-1`}
                      >
                        When you place your order, we know that you want to
                        receive the item as fast as possible. We will make that
                        happen.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(3) : toggleTarget(null);
                    }}
                  >
                    {target == 3 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      04
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        When will you ship my order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 4 ? "block" : "hidden"
                        } z-1`}
                      >
                        We normally ship all orders within 5 – 9 business days.
                        Final delivery time will vary based on delivery
                        location. For further details, please check Shipping &
                        Delivery (plz add link of that page )
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(4) : toggleTarget(null);
                    }}
                  >
                    {target == 4 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      05
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        When will my order get delivered?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 5 ? "block" : "hidden"
                        } z-1`}
                      >
                        Transit and delivery time may vary depending on your
                        location and the items ordered. We’ll send you a link to
                        track the status of your order.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(5) : toggleTarget(null);
                    }}
                  >
                    {target == 5 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      06
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How much do you charge for delivery?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 6 ? "block" : "hidden"
                        } z-1`}
                      >
                        We offer free shipping on all orders.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(6) : toggleTarget(null);
                    }}
                  >
                    {target == 6 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      07
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How can I track my order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 7 ? "block" : "hidden"
                        } z-1`}
                      >
                        An email is sent to you after the order is shipped. It
                        contains the tracking number and details of the service
                        provider. If you are having trouble reading the emails
                        or if you haven’t received any updates, please get in
                        touch with us immediately
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(7) : toggleTarget(null);
                    }}
                  >
                    {target == 7 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      08
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How do I place bulk order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 8 ? "block" : "hidden"
                        } z-1`}
                      >
                        Our products are simply awesome and buying one is just
                        not enough! You can place bulk orders by contacting us
                        at sales@harshhasthkala.com . We offer customization as
                        well
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(8) : toggleTarget(null);
                    }}
                  >
                    {target == 8 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
              </p>
            )}

            {pageType === "privacypolicy" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm  sm:text-xl font-semibold">
                  Privacy Policy
                </h1>
                <br />
                <span className="font-semibold">
                  This Privacy Policy of Harsh hasthkala describes how Harsh
                  Hasthkala manages personal information and respects your
                  privacy. This policy may be amended from time to time.{" "}
                </span>
                <br />
                <br />
                <span className="font-semibold">1.</span> Collection of Personal
                Information: As a visitor to the Site, you can engage in many
                activities without providing any Personal Information. Depending
                upon the activity, some of the information that we ask you to
                provide is identified as mandatory and some as voluntary. If you
                do not provide the mandatory data with respect to a particular
                activity, you will not be able to engage in that activity.
                However, when you register to use a Harsh hasthkala and order
                products as a Harsh hasthkala customer, in order to provide the
                services to you, we may collect your contact information such as
                your name, phone numbers, address and email address as well as
                profile information, including your password, details about your
                purchases and details about your interactions with us. <br />
                <br />
                <span className="font-semibold">2.</span> Updating your Personal
                Information: You have the right to access and correct, or delete
                your Personal Information and privacy preferences at any time.
                This may be accomplished by clicking on the link, "My Profile",
                where you can view and make changes to most of your Personal
                Information immediately. For security purposes, certain Personal
                Information can only be changed by contacting support. We will
                respond to your request promptly within a reasonable time.{" "}
                <br />
                <br />
                <span className="font-semibold">3.</span> How your Personal
                Information is used: Harsh hasthkala collects your information
                in order to provide services to you, comply with our legal
                obligations, and to improve our products and services. We do not
                sell, rent or share your personally identifiable information to
                or with third parties in any way other than as disclosed in this
                Privacy Policy. Harsh Hasthkala may use this information to{" "}
                <br />
                <br />
                · Process your financial transactions; Service your order.{" "}
                <br />
                <br />
                · Respond to customer service requests, questions, and concerns.{" "}
                <br />
                <br />
                · Administer your account. <br />
                <br />
                · Send you the requested product or service information. <br />
                <br />
                · Keep you informed about special offers and services of Harsh
                hasthkala and selected third parties. <br />
                <br />
                · Administer promotions and notify you of important events.{" "}
                <br />
                <br />
                · Investigate, prevent, or take action regarding illegal
                activities and/or violations of our Terms of Service. <br />
                <br />
                · Meet our research and product/service development needs and to
                improve our Site, services, and offerings. <br />
                <br />
                · Customize your experience, including targeting our services
                and offerings to you. <br />
                <br />
                In certain situations, Harsh hasthkala may be required to
                disclose personal data in response to lawful requests by public
                authorities. Where required by law (like to comply with a
                warrant, court order, or legal notice served on Harsh
                hasthkala), and when we believe that disclosure is necessary to
                protect our rights, avoid litigation, protect your safety or the
                safety of others, investigate fraud, and/or respond to a
                government request. We may also disclose information about you
                if we determine that such disclosure should be made for reasons
                of national security, law enforcement, or other issues of public
                importance. <br />
                <br />
                <span className="font-semibold">4.</span> Information sharing
                with service providers: Harsh hasthkala uses one or more outside
                payment processing companies to bill you for our goods and
                services. To the best of our knowledge, these companies do not
                retain, share, store or use personally identifiable information
                for any other purpose. We also share Personal Information with
                certain companies that perform services on our behalf. We only
                share the Personal Information which is necessary for them to
                perform those services. We require any company with which we may
                share Personal Information to protect that data in a manner
                consistent with this policy and to limit the use of such
                Personal Information to the performance of services for Harsh
                hasthkala. We do not sell or otherwise provide Personal
                Information to other companies for the marketing of their own
                products or services. <br />
                <br />
                <span className="font-semibold">5.</span> Data Retention: We
                will retain your information for as long as your account is
                active, your information is needed to provide you services, or
                as required to fulfill our legal obligations. If you wish to
                delete your account or request that we no longer use your
                information to provide you services contact us at support@ Harsh
                hasthkala.com. We will respond to your request within reasonable
                time. We will retain and use your information as necessary to
                comply with our legal obligations, resolve disputes and enforce
                our agreements. <br />
                <br />
                <span className="font-semibold">6.</span> Unsubscribe/Opt-Out:
                You may opt out of receiving Harsh Hasthkala’s email updates,
                newsletters and/or partner emails by clicking on the "My
                Profile" link on the website and making the appropriate
                selections. The choice to opt out of such communications is also
                generally available during the sign-up process. Harsh hasthkala
                will still contact you when there are changes to the Terms of
                Service or Submitter Terms of Service, as applicable. In
                addition, we will still send you service-related announcements
                including, but not limited to, a registration email,
                order-related notifications and emails automatically triggered
                by actions you took on the Site. Generally, you may not opt out
                of these communications, which are not promotional in nature.{" "}
                <br />
                <br />
                <span className="font-semibold">7.</span> Protection of your
                Personal Information: The Personal Information that you provide
                in connection with the use of the Site is protected in several
                ways. It resides on secure servers that only selected Harsh
                hasthkala personnel have access to via password. Your Personal
                Information is encrypted whenever it is transmitted to Harsh
                hasthkala. When you enter sensitive information (such as credit
                card numbers) on our registration or order forms, we encrypt
                that information using transport layer security technology. We
                strive to protect the Personal Information submitted to us, both
                during transmission and once we receive it. However, no method
                of transmission over the Internet, or method of electronic
                storage, is 100% secure. While we take into account the
                sensitivity of the Personal Information we collect, process, and
                store, and the current state of technology to use these measures
                protect your Personal Information, we cannot guarantee its
                absolute security. If you have any questions, doubts or
                confusion in regard to any of the terms set out here in the
                privacy policy, please seek clarifications from us through email
                (support@ Harsh hasthkala.com). We will get back to you within a
                reasonable time. <br />
                <br />
                <span className="font-semibold">8.</span> In case of a query,
                concern, or complaint in relation to compliance issues related
                to Consumer Protection (E-Commerce) Rules, Consumer Protection
                Act, and Information Technology (Sensitive Personal Data or
                Information) Rules, please contact at grievance@ Harsh
                hasthkala.com. <br />
                <br />
              </p>
            )}

            {pageType === "terms&condition" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  TERMS AND CONDITIONS
                </h1>
                <br />
                1. The user may carefully read all the information on products
                and services as provided in relevant sections and in FAQs.{" "}
                <br />
                <br />
                2. This site is owned by Harsh hasthkala Private Limited (“Harsh
                hasthkala”). No material from this site or any other website
                owned, operated, controlled or licensed by Harsh hasthkala
                and/or its associates or its sister concerns may be copied,
                reproduced, republished, transmitted, downloaded, uploaded or in
                any other manner for commercial use or otherwise without the
                written permission of the Harsh hasthkala. Violation of this
                condition is a violation of copyright and other proprietary
                rights of the Company and/or its associates or sister concerns
                or affiliates and will attract legal action as per existing laws
                of the Government of India. <br />
                <br />
                3. The products/services provided on this site are without
                warranties of any kind either expressed or implied and Harsh
                hasthkala disclaims all or any of them fully. Harsh hasthkala
                does not warrant that the products/services offered will be
                error-free, or that the defects will be corrected, or that this
                site or the server that makes it available are or will be free
                of viruses or other harmful components. Any warranties or After
                Sale Services if any offered by the Manufacturers/Vendors on any
                product shall be serviced directly by such Manufacturer/Vendor
                and Harsh hasthkala shall not be under any obligation to ensure
                compliance or handle complaints. <br />
                <br />
                4. There is sometime a possibility of extra charges like Taxes
                or Duties which are to be borne by the recipient at the time of
                delivery. Please note that Harsh hasthkala does not control
                these charges. <br />
                <br />
                5. If the delivery is not executed during the attempt due to
                incorrect or insufficient address, recipient not at home,
                address found locked or refusal to accept, the customer shall
                still be charged for the order. No refunds would be entertained
                for such items. <br />
                <br />
                6. There may be a slight variation from the picture shown.
                However, we will make sure that we deliver the Product
                arrangement and the colours as close as possible to the
                description/ photograph shown. <br />
                <br />
                7. The product specifications (weight, size, colour etc.)
                mentioned with the product photos are only approximate. Most
                products here are handmade items. There may, hence, be a
                variation in the pictures and the respective products. Harsh
                hasthkala at its absolute discretion, may deliver a similar /
                alternate product for reasons or exigencies beyond its control.{" "}
                <br />
                <br />
                8. Under no circumstances whatsoever shall Harsh hasthkala be
                liable for any loss of data, loss of profits or any damages
                whatsoever including, without limiting, any indirect, special,
                incidental, consequential or other damages that result from the
                use of or inability to use the products/services offered on the
                site Notwithstanding the foregoing, in no event shall Harsh
                hasthkala be liable to the user for any or all damages, losses,
                and causes of action (including but not limited to, negligence)
                or otherwise exceeding the amount paid by the user to Harsh
                hasthkala for that specific service/product. <br />
                <br />
                9. In an effort to provide our customers with the most current
                information, Harsh hasthkala will, from time to time, make
                changes in the Contents and in the products or services
                described on this Site. The prices advertised on this Site are
                for Internet orders. Prices and the availability of items are
                subject to change without notice. Any prices used on this Site
                may not be indicative of the actual selling prices in your area.
                We reserve the right to limit sales, including the right to
                prohibit sales to re-sellers. We are not responsible for
                typographical or photographic errors. <br />
                <br />
                10. Users who have availed services through Harsh hasthkala.com
                by selecting one or more listed service providers: Harsh
                hasthkala.com reaches out to these users via SMS / E-mail / Call
                / WhatsApp messages Online after their scheduled appointment
                schedule and ask them for Feedback on their experience or inform
                them on the latest product updates from the Service provider.
                Harsh hasthkala.com has complete ownership of this flow of
                feedback collection. <br />
                <br />
                11. Notwithstanding any or all of the terms, conditions &
                disclaimers stated herein above and in FAQ or elsewhere in the
                site, any refund or payment by Harsh hasthkala to the user or
                anyone else acting on his behalf for any reason whatsoever,
                voluntarily or on being claimed by any user shall not become a
                waiver of any or all of the Terms, Conditions and Disclaimers
                made and shall not become a precedent for similar future
                actions/claims or confer any rights on the claimant. And further
                that all such refunds/payments if any when made shall be subject
                to 10% deduction on account of Bank charges and other processing
                overheads. <br />
                <br />
                12. If the user has any questions, doubts or confusion in regard
                to any of the terms & conditions set out herein, he should seek
                clarifications from us through email Harsh hasthkala@gmail.com
                and should wait for a written clarification before using the
                service <br />
                <br />
                13. In case of a query, concern, or complaint in relation to
                compliance issues related to Consumer Protection (E-Commerce)
                Rules, Consumer Protection Act and Information Technology
                (Sensitive Personal Data or Information) Rules, please contact
                Mr. Ashwin R Francis (Compliance Officer) at Harsh
                hasthkala@gmail.com <br />
                <br />
                The user of Harsh hasthkala is presumed to have read all the
                terms and conditions herein and FAQ and is deemed to have
                agreed, understood and accepted unconditionally all the terms,
                conditions, procedures and risks of using the services and
                cannot at any time claim ignorance of any or all of them. In
                event of any disputes between the parties in connection with any
                provision, both the parties hereto, shall endeavour to settle
                dispute amicably. In event Parties fail to settle within 30
                days, the dispute shall be referred to sole Arbitrator, governed
                by the Arbitration and Conciliation Act, 1996. All the disputes
                will subject to the Judiciary of Madhya Pradesh Jurisdiction.
              </p>
            )}

            {pageType === "ourstory" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  OUR STORY
                </h1>
                <br />
                Founded in 2022, Harsh hasthkala is a premier company
                specializing in providing both customized and standardized gifts
                that are guaranteed to bring joy and smiles to your loved ones'
                faces. Our mission is to help you find the perfect gift that
                truly reflects the uniqueness and individuality of your special
                someone. <br />
                <br />
                At Harsh hasthkala, we understand the struggle of finding the
                right gift, that’s what happened with Let me share with you the
                story of this incredibly talented founder who enjoys giving
                gifts to his loved ones. The most unique thing about him is that
                he always tried to add a personal touch to each gift he gave,
                and as a result, no girl ever learned about any other girl in
                his life (har ladki ke liye alag gift tha kyu ki). Jokes aside,
                he realised that this was a problem with our gift-giving custom,
                where our minds are trained just to give clothes and chocolates
                as gifts, let’s bring this new trend of personalized gifting,
                giving gifts with a special touch for your khass people, Since
                we are based in Madhya Pradesh, he also noticed how the state's
                art is diminishing and the art that was popular during those
                times is disappearing day by day. The talented artists were
                leaving their craft and taking jobs outside with extremely low
                pay, and the main problem is that there is no platform for them
                to sell this incredible art form. We have made a new platform
                for these skilful artists to promote and sell their art on our
                platform and we always wanted to add a touch of our tribal art
                as we have Mandana Painting, Pithora painting, Gond art etc.
                which are beautiful and deserves a social importance. <br />
                <br />
                Why settle for mundane, run-of-the-mill presents when you can
                surprise your special ones with something extraordinary with
                Harsh hasthkala? With our thoughtfully selected collection, you
                can say goodbye to boring gifts once and for all. Whether it's a
                birthday, anniversary, wedding, or any other occasion, we have
                the perfect gift to make your moments even more memorable.{" "}
                <br />
                <br />
                At Harsh hasthkala we prioritize customer satisfaction above all
                else. Our user-friendly website makes it effortless for you to
                explore our product range, place orders, and track deliveries.
                Our dedicated customer support team is always ready to assist
                you with any queries or special requests you may have. <br />
                <br />
                Join us in our mission to elevate the art of gift-giving and
                this going indigenous for gifting and make every occasion a
                memorable celebration. Let Harsh hasthkala be your go-to
                destination for finding that perfect gift that will touch the
                hearts of your loved ones and leave a lasting impression.
                Together, let's create cherished moments and memories with no
                more boring gifts, only special surprises for your special ones!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FooterPages;
