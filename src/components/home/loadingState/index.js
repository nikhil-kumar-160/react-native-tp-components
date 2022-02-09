import React from 'react';
import {View} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from 'src/utils/color';
import Styles from './Styles';
import FText from 'src/common/rn/FText';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from 'src/utils/Dimen';

const LoadingState = () => {
  const animatedComponent = (cardColor, secondaryColor) => {
    return (
      <LinearGradient
        style={Styles.animatedComponent}
        colors={[cardColor, secondaryColor, cardColor]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
    );
  };

  const CardPlaceholder = ({cardColor, secondaryColor}) => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(cardColor, secondaryColor)}
        duration={1000}
        delay={100}>
        <Placeholder style={Styles.loadingCardStyle(cardColor)} />
      </PlaceholderContainer>
    );
  };

  const InboxPlaceholder = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK_2,
          Color.WHITE,
        )}
        duration={1000}
        delay={100}
        style={Styles.inboxPlaceholderContainer}>
        <Placeholder style={Styles.inboxTextPlaceholder('80%')} />
        <Placeholder style={Styles.inboxTextPlaceholder('90%')} />
        <Placeholder style={Styles.inboxTextPlaceholder('60%')} />
        <Placeholder style={Styles.inboxTextPlaceholder('50%')} />
        <Placeholder style={Styles.datePlaceholder} />
        <View style={Styles.arrowContainer}>
          <Feather name="arrow-right" size={DP._16} color={Color.DODGER_BLUE} />
        </View>
      </PlaceholderContainer>
    );
  };

  return (
    <>
      <View style={[Styles.claimsCardContainer, Styles.marginHorizontal_24]}>
        <CardPlaceholder
          cardColor={Color.IRIS}
          secondaryColor={Color.PERIWINKLE}
        />
        <CardPlaceholder
          cardColor={Color.AQUA_MARINE}
          secondaryColor={Color.TIFFANY_BLUE}
        />
      </View>
      <FText type="medium" style={Styles.sectionTitle}>
        Inbox
      </FText>
      <InboxPlaceholder />
    </>
  );
};

export default LoadingState;
