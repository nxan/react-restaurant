import React, { Component } from 'react';

// Externals
import { Doughnut } from 'react-chartjs-2';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { IconButton, Typography } from '@material-ui/core';

// Material icons
import {
  LaptopMac as LaptopMacIcon,
  PhoneIphone as PhoneIphoneIcon,
  Refresh as RefreshIcon,
  TabletMac as TabletMacIcon
} from '@material-ui/icons';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletToolbar,
  PortletContent
} from 'components';

// Palette
import palette from 'theme/palette';

// Chart configuration
import { data, options } from './chart';

// Component styles
import styles from './styles';

class DevicesChart extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader noDivider>
          <PortletLabel title="Lưu lượng khách hàng" />
          <PortletToolbar>
            <IconButton
              className={classes.refreshButton}
              onClick={this.handleRefresh}
              variant="text"
            >
              <RefreshIcon />
            </IconButton>
          </PortletToolbar>
        </PortletHeader>
        <PortletContent>
          <div className={classes.chartWrapper}>
            <Doughnut
              data={data}
              options={options}
            />
          </div>
          <div className={classes.stats}>
            <div className={classes.device}>
              <Typography variant="body1">Sáng</Typography>
              <Typography
                style={{ color: palette.primary.main }}
                variant="h2"
              >
                63%
              </Typography>
            </div>
            <div className={classes.device}>
              <Typography variant="body1">Trưa</Typography>
              <Typography
                style={{ color: palette.danger.main }}
                variant="h2"
              >
                15%
              </Typography>
            </div>
            <div className={classes.device}>
              <Typography variant="body1">Chiều</Typography>
              <Typography
                style={{ color: palette.warning.main }}
                variant="h2"
              >
                23%
              </Typography>
            </div>
          </div>
        </PortletContent>
      </Portlet>
    );
  }
}

DevicesChart.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DevicesChart);
