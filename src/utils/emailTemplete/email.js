module.exports = function emailTemplate(
  fullName,
  message,
  verify_link,
  verify_text
) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml><!
      [endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width" name="viewport" />
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <!--<![endif]-->
      <title>verify mail</title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
        body {
          margin: 0;
          padding: 0;
        }

        table,
        td,
        tr {
          vertical-align: top;
          border-collapse: collapse;
        }

        * {
          line-height: inherit;
        }

        a[x-apple-data-detectors="true"] {
          color: inherit !important;
          text-decoration: none !important;
        }
      </style>
      <style id="media-query" type="text/css">
        @media (max-width: 620px) {
          .block-grid,
          .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }

          .block-grid {
            width: 100% !important;
          }

          .col {
            width: 100% !important;
          }

          .col > div {
            margin: 0 auto;
          }

          img.fullwidth,
          img.fullwidthOnMobile {
            max-width: 100% !important;
          }

          .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
          }

          .no-stack.two-up .col {
            width: 50% !important;
          }

          .no-stack .col.num4 {
            width: 33% !important;
          }

          .no-stack .col.num8 {
            width: 66% !important;
          }

          .no-stack .col.num4 {
            width: 33% !important;
          }

          .no-stack .col.num3 {
            width: 25% !important;
          }

          .no-stack .col.num6 {
            width: 50% !important;
          }

          .no-stack .col.num9 {
            width: 75% !important;
          }

          .video-block {
            max-width: none !important;
          }

          .mobile_hide {
            min-height: 0px;
            max-height: 0px;
            max-width: 0px;
            display: none;
            overflow: hidden;
            font-size: 0px;
          }

          .desktop_hide {
            display: block !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body
      class="clean-body"
      style="
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #e2e2e2;
      "
    >
      <!--[if IE]>
  <div class="ie-browser"><![endif]-->
      <table
        bgcolor="#E2E2E2"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          table-layout: fixed;
          vertical-align: top;
          min-width: 320px;
          margin: 0 auto;
          border-spacing: 0;
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #e2e2e2;
          width: 100%;
        "
        valign="top"
        width="100%"
      >
        <tbody>
          <tr style="vertical-align: top;" valign="top">
            <td style="word-break: break-word; vertical-align: top;" valign="top">
              <!--[if (mso)|(IE)]>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                      <td align="center" style="background-color:#E2E2E2"><![endif]-->
              <div style="background-color: transparent;">
                <div
                  class="block-grid"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                    height:0xp;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="background-color:transparent;">
                              <tr>
                                  <td align="center">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:600px">
                                          <tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                    <!--[if (mso)|(IE)]>
                          <td align="center" width="600"
                              style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;">
                          <![endif]-->
                    <div
                      class="col num12"
                      style="
                        min-width: 320px;
                        max-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                        width: 600px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 25px;
                                    padding-right: 25px;
                                    padding-bottom: 25px;
                                    padding-left: 25px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="0"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 0px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          height="0"
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: transparent;">
                <div
                  class="block-grid"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #0b132b;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: #0b132b;
                    "
                  >
                    <!--[if (mso)|(IE)]>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="background-color:transparent;">
                              <tr>
                                  <td align="center">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:600px">
                                          <tr class="layout-full-width" style="background-color:#0b132b"><![endif]-->
                    <!--[if (mso)|(IE)]>
                          <td align="center" width="600"
                              style="background-color:#0b132b;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;">
                          <![endif]-->
                    <div
                      class="col num12"
                      style="
                        min-width: 320px;
                        max-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                        width: 600px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 2px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="center"
                            class="img-container center fixedwidth"
                            style="padding-right: 0px; padding-left: 0px; background-color:white;"
                          >
                            <!--[if mso]>
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                              <tr style="line-height:0px">
                                                  <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                          <![endif]-->

                                          <img src="https://i.ibb.co/b5htVZD/shopwitbee-LOGO.jpg" alt="intriobasket-LOGO" border="0" width="100%" />

                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: transparent;">
                <div
                  class="block-grid"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;

                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: #ffffff;
                    "
                  >
                    <!--[if (mso)|(IE)]>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="background-color:transparent;">
                              <tr>
                                  <td align="center">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:600px">
                                          <tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
                    <!--[if (mso)|(IE)]>
                          <td align="center" width="600"
                              style="background-color:#FFFFFF;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;">
                          <![endif]-->
                    <div
                      class="col num12"
                      style="
                        min-width: 320px;
                        max-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                        width: 600px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 15px;
                                    padding-right: 15px;
                                    padding-bottom: 15px;
                                    padding-left: 15px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if mso]>
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                              <td style="padding-right: 10px; padding-left: 30px; padding-top: 10px; padding-bottom: 5px; font-family: Arial, sans-serif">
                                      <![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              line-height: 120%;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 5px;
                              padding-left: 30px;
                            "
                          >
                            <div
                              style="
                                font-size: 12px;
                                line-height: 14px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                color: #555555;
                              "
                            >
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 16px;
                                  margin: 0;
                                "
                              >
                                <strong>
                                  <span
                                    style="font-size: 24px; line-height: 28px;"
                                    >Hello ${fullName}</span
                                  ></strong
                                >
                              </p>
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 24px;
                                  margin: 10px 0,0,0;
                                "
                              >
                                ${message}
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="
                              padding-top: 30px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 50px;
                            "
                          >

${
  verify_text ? (`
    <a  target="_blank"
    href='${verify_link ? verify_link : "#"}'
      style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffffff;
                                background-color: #cc0227;
                                border-radius: 3px;
                                -webkit-border-radius: 3px;
                                -moz-border-radius: 3px;
                                width: auto;
                                width: auto;
                                border-top: 1px solid #cc0227;
                                border-right: 1px solid #cc0227;
                                border-bottom: 1px solid #cc0227;
                                border-left: 1px solid #cc0227;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
     
    >
      <span
        style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 12px;
                                  display: inline-block;
                                "
      >
        <span style="font-size: 20px; line-height: 24px;color:white!important">
          ${verify_text}
        </span>
      </span>
    </a>`
  ) : (
    ""
  )
}




                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 15px;
                                    padding-right: 15px;
                                    padding-bottom: 15px;
                                    padding-left: 15px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: transparent;">
                <div
                  class="block-grid"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      class="col num12"
                      style="
                        min-width: 320px;
                        max-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                        width: 600px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <div
                            style="
                              color: #0b132b;
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              line-height: 180%;
                              padding-top: 10px;
                              padding-right: 30px;
                              padding-bottom: 30px;
                              padding-left: 30px;
                            "
                          >
                            <div
                              style="
                                font-size: 12px;
                                line-height: 21px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                color: #0b132b;
                              "
                            >


                              <p
                                style="
                                  font-size: 12px;
                                  line-height: 25px;
                                  margin: 0;
                                "
                              >
                                <span style="font-size: 14px;"
                                  >If you didn't attempt to reach us through this email
                                  address,you may delete this
                                  email message.</span
                                >
                              </p>
                              <p
                                style="
                                  font-size: 12px;
                                  line-height: 25px;
                                  margin: 0;
                                "
                              >
                                <span style="font-size: 14px;">Cheers,</span>
                              </p>
                              <p
                                style="
                                  font-size: 12px;
                                  line-height: 21px;
                                  margin: 0;
                                "
                              >
                                <em
                                  ><strong
                                    ><span
                                      style="font-size: 14px; line-height: 25px;"
                                      >Intriobasket</span
                                    ></strong
                                  ></em
                                >
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: transparent;">
                <div
                  class="block-grid three-up"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #0b132b;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: #0b132b;
                    "
                  >
                    <!--[if (mso)|(IE)]>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="background-color:transparent;">
                              <tr>
                                  <td align="center">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:600px">
                                          <tr class="layout-full-width" style="background-color:#0b132b"><![endif]-->
                    <!--[if (mso)|(IE)]>
                          <td align="center" width="200"
                              style="background-color:#0b132b;width:200px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;">
                          <![endif]-->
                    <div
                      class="col num4"
                      style="
                        max-width: 320px;
                        min-width: 200px;
                        display: table-cell;
                        vertical-align: top;
                        width: 200px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div
                            align="center"
                            class="img-container center autowidth"
                            style="padding-right: 0px; padding-left: 0px;"
                          >
                            <!--[if mso]>
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                              <tr style="line-height:0px">
                                                  <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                          <![endif]-->
                            <div style="font-size: 1px; line-height: 15px;"></div>

                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <!--[if mso]>
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                              <td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif">
                                      <![endif]-->
                          <div
                            style="
                              color: #ffffff;
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              line-height: 120%;
                              padding-top: 5px;
                              padding-right: 5px;
                              padding-bottom: 5px;
                              padding-left: 5px;
                            "
                          >
                            <div
                              style="
                                font-size: 12px;
                                line-height: 14px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                color: #ffffff;
                              "
                            >
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 16px;
                                  text-align: center;
                                  margin: 0;
                                "
                              ></p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td>
                          <td align="center" width="200"
                              style="background-color:#0b132b;width:200px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;">
                          <![endif]-->
                    <div
                      class="col num4"
                      style="
                        max-width: 320px;
                        min-width: 200px;
                        display: table-cell;
                        vertical-align: top;
                        width: 200px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div
                            align="center"
                            class="img-container center autowidth"
                            style="padding-right: 0px; padding-left: 0px;"
                          >
                            <!--[if mso]>
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0" background-color="red">
                                              <tr style="line-height:0px">
                                                  <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                          <![endif]-->
                            <div style="font-size: 1px; line-height: 10px; background-color:"red">
                            <img
                              align="center"
                              alt="Image"
                              border="0"
                              src="https://image.freepik.com/free-vector/online-shopping-website-buy-clothes-online-e-commerce-delivery-concept-order-goods-get-them-fast-easy-illustration_277904-1840.jpg"
                              title="Image"
                              width="100%"
                            />
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <!--[if mso]>
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                              <td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif">
                                      <![endif]-->
                          <div
                            style="
                              color: #ffffff;
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              line-height: 120%;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              style="
                                font-size: 12px;
                                line-height: 14px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                color: #ffffff;
                              "
                            >
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 16px;
                                  text-align: center;
                                  margin: 0;
                                "
                              >
                                <span style="font-size: 14px; line-height: 16px;"
                                  ><strong>info@intriobasket.com</strong></span
                                >
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td>
                          <td align="center" width="200"
                              style="background-color:#0b132b;width:200px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;">
                          <![endif]-->
                    <div
                      class="col num4"
                      style="
                        max-width: 320px;
                        min-width: 200px;
                        display: table-cell;
                        vertical-align: top;
                        width: 200px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="social_icons"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    padding-top: 5px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    activate="activate"
                                    align="center"
                                    alignment="alignment"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social_table"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: undefined;
                                      mso-table-tspace: 0;
                                      mso-table-rspace: 0;
                                      mso-table-bspace: 0;
                                      mso-table-lspace: 0;
                                    "
                                    to="to"
                                    valign="top"
                                  >
                                    <tbody>
                                      <tr
                                        align="center"
                                        style="
                                          vertical-align: top;
                                          display: inline-block;
                                          text-align: center;
                                        "
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            padding-bottom: 5px;
                                            padding-right: 3px;
                                            padding-left: 3px;
                                          "
                                          valign="top"
                                        ></td>
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            padding-bottom: 5px;
                                            padding-right: 3px;
                                            padding-left: 3px;
                                          "
                                          valign="top"
                                        ></td>
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            padding-bottom: 5px;
                                            padding-right: 3px;
                                            padding-left: 3px;
                                          "
                                          valign="top"
                                        ></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if mso]>
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                              <td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: Arial, sans-serif">
                                      <![endif]-->
                          <div
                            style="
                              color: #ffffff;
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              line-height: 120%;
                              padding-top: 0px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              style="
                                font-size: 12px;
                                line-height: 14px;
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                color: #ffffff;
                              "
                            >
                              <p
                                style="
                                  font-size: 12px;
                                  line-height: 14px;
                                  text-align: center;
                                  margin: 0;
                                "
                              ></p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 5px;
                                    padding-right: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="0"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 0px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          height="0"
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: transparent;">
                <div
                  class="block-grid"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                    height:0px;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="background-color:transparent;">
                              <tr>
                                  <td align="center">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:600px">
                                          <tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                    <!--[if (mso)|(IE)]>
                          <td align="center" width="600"
                              style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                              valign="top">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                      <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;">
                          <![endif]-->
                    <div
                      class="col num12"
                      style="
                        min-width: 320px;
                        max-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                        width: 600px;
                      "
                    >
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: break-word;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 25px;
                                    padding-right: 25px;
                                    padding-bottom: 25px;
                                    padding-left: 25px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr
                                        style="vertical-align: top;"
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            word-break: break-word;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
    </body>
  </html>
  `;
};
