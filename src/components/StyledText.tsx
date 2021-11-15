import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
const StyledText = styled.Text<ColorProps & SpaceProps & TypographyProps>(
  compose(color, space, typography)
);

export default StyledText;
