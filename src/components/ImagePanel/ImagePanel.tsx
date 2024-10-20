import React from 'react';
import { PanelProps, FieldType } from '@grafana/data';
import { PanelOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { Styles } from '../../styles';

/**
 * Properties
 */
interface Props extends PanelProps<PanelOptions> {}

/**
 * Image Panel
 */
export const ImagePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  /**
   * styles
   */
  const styles = useStyles2(Styles);
  /*
   * Name field (string)
   */
  let src = data.series
  .map((series) =>
    series.fields.find((field) => field.type === FieldType.string && (!options.name || field.name === options.name))
  )
  .map((field) => field?.values.get(field.values.length - 1))
  .toString();

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <img
        className={styles.img}
        width={width}
        height={height}
        src={src}
      >
      </img>
    </div>
  );
};
