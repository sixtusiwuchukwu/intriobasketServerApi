const sendMail = require("../emailUtils/email.service")
const invoiceTemp = require("../emailTemplete/invoice")
const GeneratePdf =  (Data) =>{
    const fs = require("fs");
    const PDFDocument = require("pdfkit-table");
  
    // init document
    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    // save document
    // doc.pipe(fs.createWriteStream("./document.pdf"));
    let buffers = [];
    let data;
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async() => {
    
        data = Buffer.concat(buffers);
        await sendMail({
            email: "sixtusiwuchukwu21@gmail.com",
            subject: "INVOICE",
            copy: ["delivery@intriobasket.ng","logistics@intriobasket.ng","accounts@intriobasket.ng","admin@intriobasket.ng"],
            html:invoiceTemp(Data.fullName,`your item delivery schedule is <b>${Data.schedule}</b><br/> your item dropOff location is <b>${Data.location}</b> <br/>your checkout invoice is attached to this mail`),
            
            attachment:data
        })
    // return pdfData
        // ... now send pdfData as attachment ...
    
    });
    
    (async function(){
        // table 
        const table = {
          title: "CHECK OUT INVOICE",
          subtitle: Data.fullName,
          headers: [ "product Name", "price","quantity","total" ],
          rows: Data.rows,
        };
        // A4 595.28 x 841.89 (portrait) (about width sizes)
        // width
        await doc.table(table, { 
          width: 500,
          height:200
        });
        doc.end();
    
      })();

}

// console.log(GeneratePdf({fullName:"iwuchukwu sixtus",schedule:"pick Up",location:"wuse zone 6 abuja",rows:[  [ "Switzerland", "12%", "+1.12%", "+1.12%" ], [ "France", "67%", "-0.98%", "-0.98%" ],[ "England", "33%", "+4.44%" , "+4.44%" ],
//     [ "", "", "GrandTotal" , "4000" ],
//   ]}))




module.exports = GeneratePdf