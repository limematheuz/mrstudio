import KernelAuditLogo from '../../assets/kernel-audit.svg';
import RemodelingLogo from '../../assets/remodeling-logo.svg';
import PedrosLogo from '../../assets/pedros-remodeling-logo.svg';
import InnovaticLogo from '../../assets/innovatic-logo.svg';
import ElhaLogo from '../../assets/elha-logo.svg';

const logoStyle = { height: '2.4rem', filter: 'brightness(0)', opacity: 0.75 };
const wrapStyle = { padding: '0 3rem', display: 'inline-flex', alignItems: 'center' };

export default function MarqueeContent() {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            <span style={wrapStyle}><img src={RemodelingLogo} alt="RRJ Remodeling" style={{ ...logoStyle, height: '3rem' }} /></span>
            <span style={wrapStyle}><img src={PedrosLogo} alt="Pedro's Remodeling NC" style={{ ...logoStyle, height: '2.8rem' }} /></span>
            <span style={wrapStyle}><img src={InnovaticLogo} alt="Innovatic" style={{ ...logoStyle, height: '2rem' }} /></span>
            <span style={wrapStyle}><img src={ElhaLogo} alt="Elha Laser Center" style={{ ...logoStyle, height: '1.6rem' }} /></span>
            <span style={wrapStyle}><img src={KernelAuditLogo} alt="Kernel Audit Auditores" style={{ ...logoStyle, height: '2.2rem' }} /></span>
        </div>
    );
}
