import { ReactNativeGameEngine } from 'react-native-game-engine';

const gamification = {
  createGame: () => {
    const game = ReactNativeGameEngine.createGame({
      rewards: [
        {
          id: 1,
          name: 'Daily Login',
          description: 'Login daily to earn 10 points',
          points: 10,
        },
        {
          id: 2,
          name: 'Transaction Streak',
          description: 'Make 5 transactions in a row to earn 50 points',
          points: 50,
        },
      ],
    });
    return game;
  },

  earnReward: (game, rewardId) => {
    const reward = game.getReward(rewardId);
    game.earnPoints(reward.points);
  },
};

export default gamification;
