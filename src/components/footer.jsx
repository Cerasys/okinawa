import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Footer = () => {
  return (
    <div
      style={{
        outline: "none",
        marginBottom: "0px",
        maxWidth: "800px", // Ensure proper max width
        justifyContent: "center",
        margin: "0 auto",
      }}
      className="row bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
      id="row-4651010000"
      data-trigger="none"
      data-animate="fade"
      data-delay="500"
      data-title="1 column row"
    >
      <div
        style={{ outline: "none" }}
        id="col-full-367"
        className="col-md-12 innerContent col_left"
        data-col="full"
        data-trigger="none"
        data-animate="fade"
        data-delay="500"
        data-title="full column"
      >
        <div className="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
          {/* Main Footer Text */}
          <div
            style={{ marginTop: "40px", outline: "none", cursor: "pointer" }}
            className="de elHeadlineWrapper ui-droppable de-editable"
            id="headline-94108"
            data-de-type="headline"
            data-de-editing="false"
            data-title="footer text"
            data-ce="true"
            data-trigger="none"
            data-animate="fade"
            data-delay="500"
            aria-disabled="false"
          >
            <div
              className="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize18 mfs_15"
              style={{
                textAlign: "center",
                color: "rgba(15, 15, 15, 0.309804)",
              }}
              data-bold="inherit"
              contentEditable="false"
            >
              © 2024 Hoshino Media
              <div>All rights reserved</div>
            </div>
          </div>

          {/* Earnings Disclaimer */}
          <div
            style={{ marginTop: "20px", outline: "none", cursor: "pointer" }}
            className="de elHeadlineWrapper ui-droppable de-editable"
            id="headline-46119"
            data-de-type="headline"
            data-de-editing="false"
            data-title="footer text"
            data-ce="true"
            data-trigger="none"
            data-animate="fade"
            data-delay="500"
            aria-disabled="false"
          >
            <div
              className="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize18 mfs_10"
              style={{
                textAlign: "center",
                color: "rgba(15, 15, 15, 0.31)",
                fontSize: "12px",
              }}
              data-bold="inherit"
              contentEditable="false"
            >
              Earnings Disclaimer &amp; Income Claims:
              <div>
                Starting and running an online coaching course is NOT a
                get-rich-quick scheme. It requires a lot of hard work and
                dedication to see results. Success is not guaranteed, as there
                are many factors at play. Hoshino Media does not guarantee or
                promise results, as outcomes vary from person to person.
              </div>
            </div>
          </div>

          {/* Facebook Disclaimer */}
          <div
            style={{ marginTop: "20px", outline: "none", cursor: "pointer" }}
            className="de elHeadlineWrapper ui-droppable de-editable"
            id="headline-65027"
            data-de-type="headline"
            data-de-editing="false"
            data-title="footer text"
            data-ce="true"
            data-trigger="none"
            data-animate="fade"
            data-delay="500"
            aria-disabled="false"
          >
            <div
              className="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize18 mfs_10"
              style={{
                textAlign: "center",
                color: "rgba(15, 15, 15, 0.31)",
                fontSize: "12px",
              }}
              data-bold="inherit"
              contentEditable="false"
            >
              This site is not a part of the Facebook website or Facebook Inc.
              Additionally, this site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </div>
            {/* Legal Links Styled as Text (No Button Style) */}
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(15, 15, 15, 0.31)",
              }}
            >
              <div>
                <Link
                  to="/privacy"
                  style={{
                    color: "rgba(15, 15, 15, 0.31)", // Matching footer text color
                    textDecoration: "none", // Removing underline
                    fontSize: "12px", // Matching text size
                  }}
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  to="/terms-of-service"
                  style={{
                    color: "rgba(15, 15, 15, 0.31)", // Matching footer text color
                    textDecoration: "none", // Removing underline
                    fontSize: "12px", // Matching text size
                  }}
                >
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link
                  to="/earnings-disclaimer"
                  style={{
                    color: "rgba(15, 15, 15, 0.31)", // Matching footer text color
                    textDecoration: "none", // Removing underline
                    fontSize: "12px", // Matching text size
                  }}
                >
                  Earnings Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
