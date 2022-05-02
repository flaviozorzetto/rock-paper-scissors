import styled from 'styled-components';

export default {
   container: styled.div`
      margin: 0 auto;
      max-width: ${props => props['max_width'] || '1400px'};
      padding: ${props => props.padding || '0'};
      ${props => {
         return props.next_widths.length > 0
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
      width: 100%;
      align-items: ${props => props.align || 'normal'};
      justify-content: ${props => props.justify || 'normal'};
      flex-direction: ${props => props.direction || 'row'};
      gap: ${props => props.gap || 'unset'};
   `,
};
