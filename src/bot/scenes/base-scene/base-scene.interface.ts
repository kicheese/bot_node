import { IMyContext } from '../../common/common.interface';
import { Scenes } from 'telegraf';
import { ILogger } from '../../../infrastructure/logger/logger.interface';
import { IUsersRepository } from '../../../domains/users/users.repository.interface';
import { MARKUP_TYPES } from '../../../constants';
import { ProductModel } from '@prisma/client';

export interface IHandlerBase {
	method: 'enter' | 'leave';
	func: (ctx: IMyContext) => void;
}

export interface IHandlerAction {
	method: 'on';
	action: 'text' | 'text'[] | 'callback_query' | 'callback_query'[];
	func: (ctx: IMyContext) => void;
}

export interface IHandlerCustomAction {
	method: 'action';
	customAction: string;
	func: (ctx: IMyContext) => void | Promise<void>;
}

export interface IBaseControllerProps {
	scene: Scenes.BaseScene<IMyContext>;
	logger: ILogger;
	usersRepository: IUsersRepository;
}

export interface IGetNextSiblingStep {
	currentStepName: string;
	stepsNames: string[] | object;
	ctx: IMyContext;
}

export interface IMoveNextScene {
	ctx: IMyContext;
	nextSceneName: string;
}

type SavePropertyToStorageProperty<T> = Record<string, T>;

export interface ISavePropertyToStorage<T> {
	ctx: IMyContext;
	property: SavePropertyToStorageProperty<T>;
}

export interface IGetPropertyFromStorage {
	ctx: IMyContext;
	property: string;
}

export interface IActionController {
	ctx: IMyContext;
	message: string;
}

export interface ISceneReplItem {
	message: string;
}

export interface IInlineButton {
	message: string;
	callback: string;
}

export interface IShowRepliesMarkupParams {
	ctx: IMyContext;
	replies: ISceneReplItem[];
	type?: MARKUP_TYPES.TEXT | MARKUP_TYPES.HTML;
}

export interface IGetProductInfoParams {
	product: ProductModel;
}

export interface IButtons {
	title: string;
	items: string[][];
}
