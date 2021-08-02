Feature: Configuration

@Configuration
Scenario: Set Alarm Range And Generate Alarm
Given I click on Configuration Section of svb5 System Manager
When I navigate to Alarm in Configuration Section
Then I navigate to Service in Alarm Section of Configuration
And I set Alarm Range as Critical
And I generate the Test Alarm

@Active
Scenario: Verify the Active Alarm and Acknowledge Alarm
Given I click on Alarms Section of svb5 System Manager
When I click on Device AK-SM880A in Active Alarms
Then I verify the Description as Test Alarm in Information window of Active Alarm
And I verify the Point as AK-SM880A in Information window of Active Alarm
And I verify the Address as 0 in Information window of Active Alarm
And I verify the Setting as Alarm if ON in Information window of Active Alarm
And I verify the Current Value as Trip in Information window of Active Alarm
And I verify the Occured Time in Information window of Active Alarm
And I verify the Acknowledge Status as No in Information window of Active Alarm
And I verify the AlarmLevel as Critical in Information window of Active Alarm
And I verify the AlarmAction as 1 in Information window of Active Alarm
Then I click on Acknowledge the Alarm in Information window of Active Alarm

@Acknowledge
Scenario: Verify the Acknowlegde Alarm
Given I click on Acknowledge Alarm Section of svb5 System Manager
When I click on Device AK-SM880A in Acknowledge Alarm
Then I verify the Description as Test Alarm in Information window of Acknowledge Alarm
And I verify the Point as AK-SM880A in Information window of Acknowledge Alarm
And I verify the Address as 0 in Information window of Acknowledge Alarm
And I verify the Setting as Alarm if ON in Information window of Acknowledge Alarm
And I verify the Current Value as Trip in Information window of Acknowledge Alarm
And I verify the Occured Time in Information window of Acknowledge Alarm
And I verify the Acknowledge Status as Yes in Information window of Acknowledge Alarm
And I verify the AlarmLevel as Critical in Information window of Acknowledge Alarm
And I verify the AlarmAction as 1 in Information window of Acknowledge Alarm
Then I click on close button in Information window of Acknowledge Alarm

@Clear
Scenario: Verify the Cleared Alarm
Given I click on Cleared Alarm Section Section of svb5 System Manager
When I click Device AK-SM880A in Cleared Alarm
Then I verify Description as Test Alarm in Information window of Cleared Alarm
And I verify Point as AK-SM880A in Information window of Cleared Alarm
And I verify Address as 0 in Information window of Cleared Alarm
And I verify Setting as Alarm if ON in Information window of Cleared Alarm
And I verify Current Value as Trip in Information window of Cleared Alarm
And I verify Occured Time in Information window of Cleared Alarm
And I verify Acknowledge Status as Yes in Information window of Cleared Alarm
And I verify the ClearedTime in Information window of Cleared Alarm
And I verify the AlarmLevel as Critical in Information window of Cleared Alarm
And I verify the AlarmAction as 1 in Information window of Cleared Alarm
Then I click on close button in Information window of Cleared Alarm

