import React, { useEffect } from "react";
import "./terms.css";

export const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service";
  }, []);

  return (
    <div className="terms">
      <h1>Terms of Service</h1>
      <h2>General</h2>
      <p>
        This website (the “Site”) is owned and operated by Prescelta LLC DBA
        Hoshino Media (“Prescelta LLC,” “we” or “us”). By using the Site, you
        agree to be bound by these Terms of Service and to use the Site in
        accordance with these Terms of Service, our Privacy Policy and any
        additional terms and conditions that may apply to specific sections of
        the Site or to products and services available through the Site or from
        Prescelta LLC. Accessing the Site, in any manner, whether automated or
        otherwise, constitutes use of the Site and your agreement to be bound by
        these Terms of Service. We reserve the right to change these Terms of
        Service or to impose new conditions on use of the Site, from time to
        time, in which case we will post the revised Terms of Service on this
        website. By continuing to use the Site after we post any such changes,
        you accept the Terms of Service, as modified.
      </p>

      <h2>Intellectual Property Rights</h2>

      <h3>Our Limited License to You</h3>
      <p>
        This Site and all the materials available on the Site are the property
        of us and/or our affiliates or licensors, and are protected by
        copyright, trademark, and other intellectual property laws. The Site is
        provided solely for your personal noncommercial use. You may not use the
        Site or the materials available on the Site in a manner that constitutes
        an infringement of our rights or that has not been authorized by us.
        More specifically, unless explicitly authorized in these Terms of
        Service or by the owner of the materials, you may not modify, copy,
        reproduce, republish, upload, post, transmit, translate, sell, create
        derivative works, exploit, or distribute in any manner or medium
        (including by email or other electronic means) any material from the
        Site. You may, however, from time to time, download and/or print one
        copy of individual pages of the Site for your personal, non-commercial
        use, provided that you keep intact all copyright and other proprietary
        notices.
      </p>

      <h3>Your License to Us</h3>
      <p>
        By posting or submitting any material (including, without limitation,
        comments, blog entries, Facebook postings, photos and videos) to us via
        the Site, internet groups, social media venues, or to any of our staff
        via email, text or otherwise, you are representing: (i) that you are the
        owner of the material, or are making your posting or submission with the
        express consent of the owner of the material; and (ii) that you are
        thirteen years of age or older. In addition, when you submit, email,
        text or deliver or post any material, you are granting us, and anyone
        authorized by us, a royalty-free, perpetual, irrevocable, non-exclusive,
        unrestricted, worldwide license to use, copy, modify, transmit, sell,
        exploit, create derivative works from, distribute, and/or publicly
        perform or display such material, in whole or in part, in any manner or
        medium, now known or hereafter developed, for any purpose.
      </p>

      <h3>Limitations on Linking and Framing</h3>
      <p>
        You may establish a hypertext link to the Site so long as the link does
        not state or imply any sponsorship of your site by us or by the Site.
        However, you may not, without our prior written permission, frame or
        inline link any of the content of the Site, or incorporate into another
        website or other service any of our material, content or intellectual
        property.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Throughout the Site, we may provide links and pointers to Internet sites
        maintained by third parties. Our linking to such third-party sites does
        not imply an endorsement or sponsorship of such sites, or the
        information, products or services offered on or through the sites. In
        addition, neither we nor affiliates operate or control in any respect
        any information, products or services that third parties may provide on
        or through the Site or on websites linked to by us on the Site.
      </p>

      <h3>Third-Party Information</h3>
      <p>
        If applicable, any opinions, advice, statements, services, offers, or
        other information or content expressed or made available by third
        parties, including information providers, are those of the respective
        authors or distributors, and not Prescelta LLC. Neither Prescelta LLC
        nor any third-party provider of information guarantees the accuracy,
        completeness, or usefulness of any content. Furthermore, Prescelta LLC
        neither endorses nor is responsible for the accuracy and reliability of
        any opinion, advice, or statement made on any of the Sites by anyone
        other than an authorized Prescelta LLC representative while acting in
        his/her official capacity.
      </p>

      <h3>Indemnification</h3>
      <p>
        You agree at all times to defend, indemnify and hold harmless Prescelta
        LLC, its affiliates, their successors, transferees, assignees and
        licensees and their respective parent and subsidiary companies, agents,
        associates, officers, directors, shareholders and employees of each from
        and against any and all claims, causes of action, damages, liabilities,
        costs and expenses, including legal fees and expenses, arising out of or
        related to your breach of any obligation, warranty, representation or
        covenant set forth herein.
      </p>

      <h2>Online Commerce</h2>
      <p>
        Certain sections of the Site may allow you to purchase many different
        types of products and services online that are provided by third
        parties. We are not responsible for the quality, accuracy, timeliness,
        reliability or any other aspect of these products and services. If you
        make a purchase from a merchant on the Site or on a site linked to by
        the Site, the information obtained during your visit to that merchant’s
        online store or site, and the information that you give as part of the
        transaction, such as your credit card number and contact information,
        may be collected by both the merchant and us.
      </p>

      <h3>Third-Party Transactions</h3>
      <p>
        Your participation, correspondence or business dealings with any third
        party found on or through our Site, regarding payment and delivery of
        specific goods and services, and any other terms, conditions,
        representations or warranties associated with such dealings, are solely
        between you and such third party. You agree that Prescelta LLC shall not
        be responsible or liable for any loss, damage, or other matters of any
        sort incurred as the result of such dealings.
      </p>

      <h2>Interactive Features</h2>
      <p>
        This Site may include a variety of features, such as bulletin boards,
        web logs, chat rooms, and email services, which allow feedback to us and
        real-time interaction between users, and other features which allow
        users to communicate with others.
      </p>
      <p>
        Responsibility for what is posted on bulletin boards, web logs, chat
        rooms, and other public posting areas on the Site, or sent via any email
        services on the Site, lies with each user – you alone are responsible
        for the material you post or send. We do not control the messages,
        information or files that you or others may provide through the Site.
      </p>

      <a href="/" class="back-button">
        Back to Coaching Goodness
      </a>
    </div>
  );
};
