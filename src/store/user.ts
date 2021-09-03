import { User, UserLoginDto, UserRegisteringDto } from './../models/user';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";
import { loginUser, registerUser } from '../api/user';

export interface UserStoreState {
    user: User | null,
}

const initialUserStoreState: UserStoreState = {
    user: null
}

const loginInfoStoringString = "loginInfo";

export const userStoreSlice = createSlice({
    name: "user",
    initialState: initialUserStoreState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logOutUser: (state) => {
            state.user = null;
        }
    }
})

// Export the actions, so we can dispatch them in other files.
export const { setUser, logOutUser } = userStoreSlice.actions;

export const loginUserAsync = (
    loginDto: UserLoginDto,
): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    const user: User | undefined = await loginUser(loginDto);
    dispatch(setUser(user));
    localStorage.setItem(loginInfoStoringString, JSON.stringify(loginDto));
};

export const registerUserAsync = (
    userRegister: UserRegisteringDto,
): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    //TODO: register herer.
    const user: User = await registerUser(userRegister);
    dispatch(setUser(user));
    localStorage.setItem(loginInfoStoringString,
        JSON.stringify({
            email: userRegister.email,
            password: userRegister.password,
        } as UserLoginDto)
    );
};

export const thunkReturnValueTest = (): AppThunk<Promise<string>> => async (dispatch): Promise<string> => {
    return "This is a test"
};

export const tryAutoLogin = (): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    // see if the local storage has the loginInfo
    const loginInfo: UserLoginDto = JSON.parse(
        localStorage.getItem(loginInfoStoringString)!
    );

    if (loginInfo) {
        dispatch(loginUserAsync(loginInfo));
    }
};


export const selectUserLoginReturn = (state: RootState) => state.user.user;

export default userStoreSlice.reducer;
