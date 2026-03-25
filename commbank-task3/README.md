# Commonwealth Bank Forage — Task 3: Modify the Client's Requests

## Overview
This task wires the frontend emoji/icon picker to the backend so that icon changes persist after a client refresh.

## Changes Made

### `src/api/lib.ts`
Added the `updateGoal` PUT request function that calls the backend endpoint `PUT /api/Goal/{goalId}` using Axios.

### `src/api/types.ts`
Added the `icon: string | null` field to the `Goal` interface to support emoji icons.

### `src/ui/features/goalmanager/GoalManager.tsx`
Completed the `pickEmojiOnClick` event handler to:
- Stop event propagation
- Set the icon in local state
- Close the emoji picker
- Build the updated `Goal` object
- Dispatch the update to the Redux store
- Call `updateGoalApi` to persist the change to the backend database

## How It Works
When a user picks an emoji, `pickEmojiOnClick` fires, updates the UI immediately via Redux, and simultaneously sends a `PUT` request to the backend. On next page refresh, the icon is fetched from the database and correctly displayed.
