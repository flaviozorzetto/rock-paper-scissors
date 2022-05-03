import styled from 'styled-components';

export default {
   container: styled.div`
      margin: 0 auto;
      height: ${props => props.height || 'unset'};
      position: ${props => props.position || 'static'};
      margin-top: ${props => props.mgt || '0'};
      margin-bottom: ${props => props.mgb || '0'};
      max-width: ${props => props['max_width'] || '1400px'};
      padding: ${props => props.padding || '0'};
      ${props => {
         return props.next_widths && props.next_widths.length > 0
            ? props.next_widths.map(e => {
                 return `@media screen and (max-width: ${e[0]}){
                     max-width: ${e[1]}
                 }`;
              })
            : null;
      }}
   `,

   wrapper: styled.div`
      display: flex;
      position: ${props => props.position || 'static'};
      width: ${props => props.width || '100%'};
      align-items: ${props => props.align || 'normal'};
      justify-content: ${props => props.justify || 'normal'};
      flex-direction: ${props => props.direction || 'row'};
      flex-wrap: ${props => props.fwrap || 'nowrap'};
      gap: ${props => props.gap || 'unset'};
   `,
};
