import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedTime(date);
    hideDatePicker();
  };

  const scheduleNotification = () => {
    console.log('Scheduling notification for', selectedTime);
    const currentTime = new Date();
    const timeDiff = selectedTime.getTime() - currentTime.getTime();
    const halfwayTime = new Date(currentTime.getTime() + timeDiff / 2);

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Halfway Notification',
        body: 'This is a notification scheduled halfway between the current time and the selected time.',
      },
      trigger: halfwayTime,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Scheduler</Text>
      <Button title="Show Time Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="Schedule Notification" onPress={scheduleNotification} disabled={selectedTime <= new Date()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});