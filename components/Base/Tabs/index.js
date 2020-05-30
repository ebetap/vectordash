import React, { useState } from 'react';

import Styles from './Tabs.scss';
import Block from '../Block';
import Typography from '../Typography';

export const TabContent = (props) => {
  const { label, className, children, ...tabContentProps } = props;

  return (
    <Block
      className={className}
      relative
      {...tabContentProps}
      style={{ position: 'relative' }}>
      {children}
    </Block>
  );
};

TabContent.defaultProps = {
  onClick: () => {},
  className: [],
};

export const Tabs = (props) => {
  const {
    color,
    children,
    onTabClick,
    tabActive,
    tabsHeadCustomContainerClass,
    tabsHeadCustomLabelWrapperClass,
    tabsHeadCustomLabelClass,
    tabsHeadLabelActiveClass,
    tabsHeadAlign,
    tabsHeadWidth,
  } = props;

  const [activeTab, setActiveTab] = useState(
    tabActive || children[0].props.label
  );

  return (
    <Block w100>
      <Block
        flex
        alignCenter
        justifyBetween
        className={[Styles.tabsHead, ...tabsHeadCustomContainerClass]}
        style={{
          marginLeft: tabsHeadAlign === 'left' ? 0 : 'auto',
          maxWidth: `${tabsHeadWidth}%`,
        }}>
        {children.map((child) => (
          <Block
            className={[
              Styles.tabHeadMenu,
              ...tabsHeadCustomLabelWrapperClass,
              activeTab === child.props.label && Styles.tabHeadMenuActive,
            ]}
            onClick={() => {
              onTabClick(child.props.label);
              setActiveTab(child.props.label);
            }}>
            <Typography
              color={activeTab === child.props.label ? '#ffffff' : color}
              className={[
                Styles.tabHeadLabel,
                ...tabsHeadLabelActiveClass,
                ...tabsHeadCustomLabelClass,
              ]}>
              {child.props.label}
            </Typography>
          </Block>
        ))}
      </Block>

      <Block className={[Styles.tabContent]}>
        {children.map((child) => {
          if (child) {
            if (child.props.label === activeTab) return child.props.children;
          } else {
            return null;
          }
        })}
      </Block>
    </Block>
  );
};

Tabs.defaultProps = {
  color: '#000000',
  tabsHeadAlign: 'center',
  tabsHeadLabelActiveClass: '',
  tabsHeadCustomContainerClass: [],
  tabsHeadCustomLabelWrapperClass: [],
  tabsHeadCustomLabelClass: [],
  tabsHeadWidth: 80,
  onTabClick: () => {},
  tabContentWidth: 30,
};
