import { css, cx } from '@emotion/css';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { GrafanaTheme2 } from '@grafana/data';

import { useStyles2 } from '../../themes';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const PanelContainer = ({ children, className, ...props }: Props) => {
  const styles = useStyles2(getStyles);
  return (
    <div className={cx(styles, className)} {...props}>
      {children}
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) =>
  css`
    background: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.border.weak};
    border-radius: ${theme.shape.borderRadius(1)};
  `;
