import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Avatar, Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter } from 'components';

// Component styles
import styles from './styles';

class AccountProfile extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">Nguyễn Xuân An</Typography>
              <Typography
                className={classes.locationText}
                variant="body1"
              >
                Cửa hàng Coffee HighLand
              </Typography>
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                4:32PM (GMT-4)
              </Typography>
            </div>
            {/* <Avatar
              className={classes.avatar}
              src="/images/avatars/avatar_1.png"
            /> */}
          </div>
          <div className={classes.progressWrapper}>
            <Typography variant="body1">Doanh thu ước tính tháng này: 25,000% (70%)</Typography>
            <br />
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div>
        </PortletContent>
        <PortletFooter>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Xem báo cáo tháng này
          </Button>
          <Button variant="text">Thêm món ăn</Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
