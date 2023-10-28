import { TaobaoOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      height: '80px',
      fontSize: '1rem',
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      margin: 'auto',
      backgroundColor: '#001529',
      color: '#FFFFFF',
      marginTop: '20px',
    }}>
      <div>HIMEDIA <TaobaoOutlined /></div>
    </div>
  );
}

export default Footer;