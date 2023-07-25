import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoWhiteComponent } from
	'../../assets/svgs/logo-white/logo-white.component';

import { SearchLogoComponent } from
	'../../assets/svgs/search-icon/search-icon.component';

import { UserIconComponent } from
	'../../assets/svgs/user-icon/user-icon.component';

import { BellIconComponent } from
	'src/assets/svgs/bell-icon/bell-icon.component';

import { MoneyIconComponent } from
	'src/assets/svgs/money-icon/money-icon-component';

import { ArrowLeftComponent } from
	'src/assets/svgs/arrow-left/arrow-left.component';

import { ArrowRightComponent } from
	'src/assets/svgs/arrow-right/arrow-right.component';
@NgModule({
	declarations: [
		LogoWhiteComponent,
		SearchLogoComponent,
		UserIconComponent,
		BellIconComponent,
		MoneyIconComponent,
		ArrowLeftComponent,
		ArrowRightComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		LogoWhiteComponent,
		SearchLogoComponent,
		UserIconComponent,
		BellIconComponent,
		MoneyIconComponent,
		ArrowLeftComponent,
		ArrowRightComponent,
	]
})
export class SvgComponentsModule { }
