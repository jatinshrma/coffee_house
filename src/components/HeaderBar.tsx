import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = props => {
  return (
    <View style={styles.headerBarStyle}>
      <GradientBGIcon
        name="menu"
        size={FONTSIZE.size_16}
        color={COLORS.primaryLightGreyHex}
      />
      <Text style={styles.headerTitle}>{props.title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarStyle: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
