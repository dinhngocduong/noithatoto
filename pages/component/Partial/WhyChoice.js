import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,    
    fontWeight: theme.typography.fontWeightRegular,    
  },
  
}));

export default function WhyChoice() {
  const classes = useStyles();

  return (
    <>
      <Accordion  className="no-shadow">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Chúng tôi là ai ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <div className="choice-content">
                <p>Justfly là công ty du lịch trực tuyến cung cấp các giải pháp <strong><a  href="/flights">đặt vé máy bay</a></strong>, khách sạn, vé tham quan du lịch và vé tàu xe. Thành lập từ năm 2016, với tuổi đời còn khá trẻ, thế nhưng Justfly tự tin cung cấp chuỗi dịch vụ du lịch chất lượng, giá cả cạnh tranh nhất. Trước sự cạnh tranh ngày một gắt gao trong ngành công nghiệp du lịch, điều làm Justfly vẫn đứng vững trong thị trường đó chính là mang đến cho người dùng những trải nghiệm thú vị và khác biệt khi sử dụng dịch vụ.</p>
                <p>Chỉ chưa tới 5 cú click chuột là bạn đã có thể đặt được phòng khách sạn, vé tàu xe, vé tham quan các địa điểm du lịch nổi tiếng và thậm chí là cả mua vé máy bay trực tuyến của mọi hãng hàng không. Với những thao tác đơn giản và thuận tiện như thế, bất cứ khách hàng nào cũng có thể tự xem và lựa chọn đặt mua những dịch vụ phù hợp cho bản thân, gia đình và bạn bè nhất. Đặc biệt, sau khi hoàn tất quá trình đặt mua dịch vụ, khách hàng cũng có thể theo dõi để cập nhật những thay đổi mới nhất trạng thái đơn hàng của mình giống như những sàn thương mại điện tử khác.</p>
                <p>Ngoài ra, phương thức thanh toán an toàn và linh hoạt cũng là một điểm nổi bật của Justfly. Khi đặt mua các dịch vụ của Justfly, khách hàng có nhiều lựa chọn thanh toán như: thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng,... Cùng với đó là đội ngũ tư vấn viên nhiệt tình, am hiểu sẽ luôn hỗ trợ khách hàng trong mọi tình huống, đem lại những trải nghiệm dịch vụ tốt nhất.</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="no-shadow">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Làm đẹp ô tô cùng với Justcar.vn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="no-shadow">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Các dịch vụ khác của Justcar.vn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="no-shadow">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Khám phá nội thất ô tô cùng Justcar.vn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     <style jsx>
     {
       `
       .choice-content{text-align: justify;}
       `
     }
     </style>
    </>
  );
}